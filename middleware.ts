import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
  ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/logo.svg',
    '/favicon.ico',
    '/assets/images/dotted-pattern.png',
    '/assets/icons/upload.svg',
    '/assets/icons/location-grey.svg',
    '/assets/icons/calendar.svg',
    '/assets/icons/dollar.svg',
    '/assets/icons/link.svg',

  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};