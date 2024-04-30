import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default function (request: NextRequest) {
	const response = createMiddleware({
		// A list of all locales that are supported
		locales: ['en', 'vi'],

		// Used when no locale matches
		defaultLocale: 'en',
		localePrefix: 'never',
	})(request);

	return response;
}

export const config = {
	// must place regex in parenthesis
	// /((?!.*\\.).*) match request that does not contain a dot, so the file path won't be rewritten, only page route will be rewritten
	matcher: ['/', '/((?!.*\\.).*)'],
};
