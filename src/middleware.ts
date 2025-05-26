import { defineMiddleware } from 'astro:middleware';

const PUBLIC_ROUTES = [
  '/auth/login',
];
const allowedOrigins = [
  'http://localhost:4321',
  'https://fpt-routines.sitelseg.mx'
];

const ACTION_ROUTES_PREFIX = '/_actions/';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const origin = context.request.headers.get('origin');
  const response = context.request.method === 'OPTIONS'
    ? new Response(null, { status: 204 })
    : await next();

  console.log({ origin });

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

  const sessionToken = cookies.get('session_token')?.value;
  const isAuthenticated = !!sessionToken;

  const isPublicRoute = PUBLIC_ROUTES.some(route => url.pathname.startsWith(route));
  const isActionRoute = url.pathname.startsWith(ACTION_ROUTES_PREFIX);

  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (isActionRoute) {
    return response;
  }

  if (isAuthenticated && isPublicRoute) {
    return redirect('/');
  }

  if (!isPublicRoute && !isAuthenticated) {
    return redirect(PUBLIC_ROUTES[0]);
  }

  return response;
});
