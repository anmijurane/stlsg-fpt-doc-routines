import { defineMiddleware } from 'astro:middleware';

const PUBLIC_ROUTES = [
  '/auth/login',
];

const ACTION_ROUTES_PREFIX = '/_actions/';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const sessionToken = cookies.get('session_token')?.value;
  const isAuthenticated = !!sessionToken;

  const isPublicRoute = PUBLIC_ROUTES.some(route => url.pathname.startsWith(route));
  const isActionRoute = url.pathname.startsWith(ACTION_ROUTES_PREFIX);

  if (isActionRoute) {
    return next();
  }

  if (isAuthenticated && isPublicRoute) {
    return redirect('/');
  }

  if (!isPublicRoute && !isAuthenticated) {
    return redirect(PUBLIC_ROUTES[0]);
  }

  return next();
});
