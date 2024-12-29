/**
 * Since Server Components can't write cookies, you need middleware to
 * refresh expired Auth tokens and store them.
 *
 * This middleware does the following:
 * 1. Refreshes the Auth token with the call to `supabase.auth.getUser`.
 *
 * 2. Passes the refreshed Auth token to Server Components through
 *    `request.cookies.set`, so they don't attempt to refresh the same
 *    token themselves.
 *
 * 3. Passes the refreshed Auth token to the browser, so it replaces the
 *    old token. This is done with `response.cookies.set`.
 */

import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
