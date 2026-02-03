import { auth } from '@/lib/auth/server';

export default auth.middleware({
  loginUrl: '/'
});

export const config = {
  matcher: [
    // Match all paths except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};