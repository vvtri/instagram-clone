import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {
  CUR_PATH_NAME_HEADER_KEY,
  MEDIA_FILE_PATH_REGEX,
} from './modules/common/constants/index.constant';

export default function (request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  request.headers.append(CUR_PATH_NAME_HEADER_KEY, pathname);

  if (
    pathname === '/' ||
    !MEDIA_FILE_PATH_REGEX.test(pathname.split('/').at(-1)!)
  ) {
    const response = createMiddleware({
      // A list of all locales that are supported
      locales: ['en', 'vi'],

      // Used when no locale matches
      defaultLocale: 'en',
      localePrefix: 'never',
    })(request);

    return response;
  }

  return NextResponse.next();
}

// export const config = {
// 	// must place regex in parenthesis
// 	// /((?!.*\\.).*) match request that does not contain a dot, so the file path won't be rewritten, only page route will be rewritten
// 	matcher: ['/', '/((?!.*\\.).*)'],
// };
