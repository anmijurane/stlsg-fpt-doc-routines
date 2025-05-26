import { defineMiddleware } from 'astro:middleware';

const PUBLIC_ROUTES = ['/auth/login']; // Tus rutas públicas
const allowedOrigins = [ // Tus orígenes permitidos
  'http://localhost:4321',
  'https://rpt-routines.sitelseg.mx'
];
const ACTION_ROUTES_PREFIX = '/_actions/'; // Prefijo para tus actions

// Constantes para la configuración CORS de las Actions
const CORS_ACTION_ALLOWED_METHODS = 'POST, OPTIONS';
// Ajusta las cabeceras según lo que tu cliente realmente envía y necesita
const CORS_ACTION_ALLOWED_HEADERS = 'Content-Type, Authorization, X-CSRF-Token';
// Si tus actions usan cookies/sesiones (como 'session_token'), necesitarás credenciales.
const CORS_ACTION_ALLOW_CREDENTIALS = 'true';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, cookies, redirect } = context;
  const pathname = url.pathname;
  const method = request.method;
  const requestOrigin = request.headers.get('Origin'); // Origen de la solicitud del navegador

  // Determinamos si es una ruta de action y si el origen está permitido
  const isActionRoute = pathname.startsWith(ACTION_ROUTES_PREFIX);
  const isOriginAllowedForAction = requestOrigin && allowedOrigins.includes(requestOrigin);

  // Log para depuración (puedes quitarlo en producción final)
  console.log(`Middleware: ${method} ${pathname} | Origin: ${requestOrigin} | ActionRoute: ${isActionRoute} | OriginAllowedForAction: ${isOriginAllowedForAction}`);

  // --- 1. Manejo de CORS Preflight (OPTIONS) para Action Routes ---
  // Esto debe ocurrir ANTES de cualquier otra lógica para las actions.
  if (isActionRoute && method === 'OPTIONS') {
    if (isOriginAllowedForAction) {
      console.log(`Action OPTIONS preflight for ${pathname} from ${requestOrigin} - Allowed.`);
      return new Response(null, { // Respuesta vacía con status 204
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': requestOrigin, // Devuelve el origen específico que está permitido
          'Access-Control-Allow-Methods': CORS_ACTION_ALLOWED_METHODS,
          'Access-Control-Allow-Headers': CORS_ACTION_ALLOWED_HEADERS,
          'Access-Control-Allow-Credentials': CORS_ACTION_ALLOW_CREDENTIALS, // Necesario si envías cookies/auth
          'Access-Control-Max-Age': '86400', // Cachear preflight por 1 día (opcional)
          'Vary': 'Origin, Access-Control-Request-Method, Access-Control-Request-Headers', // Importante para cachés
        }
      });
    } else {
      // Si el origen no está en la lista de permitidos para la action.
      console.warn(`Action OPTIONS preflight for ${pathname} from ${requestOrigin} - DENIED (Origin not in allowed list)`);
      return new Response('CORS preflight: Origin not allowed for action.', { status: 403 });
    }
  }

  // --- 2. Lógica de Autenticación (basada en tu implementación) ---
  const sessionToken = cookies.get('session_token')?.value;
  const isAuthenticated = !!sessionToken; // Tu forma de determinar si está autenticado

  // --- 3. Manejo de Solicitudes de Action Reales (ej. POST) ---
  if (isActionRoute) {

    console.log(`Executing action ${pathname} for authenticated user from ${requestOrigin}.`);
    const actionResponse = await next(); // Llama al handler de la Action

    // Añade cabeceras CORS a la respuesta de la Action.
    if (isOriginAllowedForAction) {
      console.log(`Adding CORS headers to action response for ${pathname}.`);
      actionResponse.headers.set('Access-Control-Allow-Origin', requestOrigin);
      if (CORS_ACTION_ALLOW_CREDENTIALS === 'true') {
        actionResponse.headers.set('Access-Control-Allow-Credentials', CORS_ACTION_ALLOW_CREDENTIALS);
      }
      actionResponse.headers.append('Vary', 'Origin');
      // Si tu frontend necesita leer cabeceras de respuesta personalizadas, usa 'Access-Control-Expose-Headers'.
    }
    return actionResponse;
  }

  // --- 4. Manejo de Rutas de Páginas Normales (No Actions) ---
  const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route));

  if (isAuthenticated && isPublicRoute) {
    // Usuario autenticado intentando acceder a una ruta pública (ej. /auth/login)
    // Tu lógica original parecía redirigir a '/', lo cual es común para la página de login.
    console.log(`Authenticated user on public route ${pathname}. Redirecting to '/'.`);
    return redirect('/');
  }

  if (!isAuthenticated && !isPublicRoute) {
    // Usuario no autenticado intentando acceder a una ruta protegida.
    console.log(`Unauthenticated user on protected route ${pathname}. Redirecting to login page: ${PUBLIC_ROUTES[0]}.`);
    return redirect(PUBLIC_ROUTES[0]); // Redirige a la primera ruta pública (asumimos que es el login)
  }

  // Para todos los demás casos (ej. usuario autenticado en ruta protegida,
  // o usuario no autenticado en ruta pública que no sea la de login si la lógica anterior no lo cubrió):
  console.log(`Proceeding with regular page load for ${pathname}.`);
  const pageResponse = await next(); // Carga la página solicitada.
  // Aquí no se añaden cabeceras CORS globales a las páginas, asumiendo que no las necesitan
  // o se sirven desde el mismo origen. Si también necesitas CORS para páginas, esa lógica iría aquí.
  return pageResponse;
});
