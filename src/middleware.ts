import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // intlMiddleware ممكن يرجع Response أو Promise<Response>
  // نتأكد من النوع ونتعامل معه بشكل صحيح:
  if (response instanceof Promise) {
    return response.then((res) => {
      const locale = request.nextUrl.locale || routing.defaultLocale;

      res.cookies.set("NEXT_LOCALE", locale, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        secure: true,
        sameSite: "lax",
      });

      return res;
    });
  } else {
    const locale = request.nextUrl.locale || routing.defaultLocale;

    response.cookies.set("NEXT_LOCALE", locale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      secure: true,
      sameSite: "lax",
    });

    return response;
  }
}
