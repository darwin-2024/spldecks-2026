// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // If the page doesn't exist (404), redirect to /services/
  if (response.status === 404) {
    return context.redirect("/services/", 302);
  }

  return response;
});