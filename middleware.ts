export { default } from "next-auth/middleware"

// Middlewares

export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};
