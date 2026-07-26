import { defineMiddleware } from 'astro:middleware';

/**
 * trailingSlash: 'always' only registers /api/chat/ and /api/event/.
 * Bare /api/chat and /api/event fall through and return the homepage HTML (200),
 * which makes the client throw: Unexpected token '<' ... is not valid JSON.
 * Rewrite bare API paths so both forms work.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (pathname === '/api/chat' || pathname === '/api/event') {
    return context.rewrite(`${pathname}/${search}`);
  }

  return next();
});
