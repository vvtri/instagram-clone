function createMiddleware(config) {
	const configWithDefaults = receiveConfig(config);

	return function middleware(request) {
		var _request$cookies$get, _configWithDefaults$d;
		// Resolve potential foreign symbols (e.g. /ja/%E7%B4%84 → /ja/約))
		const nextPathname = decodeURI(request.nextUrl.pathname);
		const { domain, locale } = resolveLocale.default(
			configWithDefaults,
			request.headers,
			request.cookies,
			nextPathname
		);
		const hasOutdatedCookie =
			configWithDefaults.localeDetection &&
			( (_request$cookies$get = request.cookies.get(
				constants.COOKIE_LOCALE_NAME
			)) === null || _request$cookies$get === void 0
				? void 0
				: _request$cookies$get.value) !== locale;
		const hasMatchedDefaultLocale = domain
			? domain.defaultLocale === locale
			: locale === configWithDefaults.defaultLocale;
		const domainConfigs =
			((_configWithDefaults$d = configWithDefaults.domains) === null ||
			_configWithDefaults$d === void 0
				? void 0
				: _configWithDefaults$d.filter((curDomain) =>
						utils.isLocaleSupportedOnDomain(locale, curDomain)
				  )) || [];
		const hasUnknownHost = configWithDefaults.domains != null && !domain;
		function getResponseInit() {
			const headers = new Headers(request.headers);
			headers.set(constants.HEADER_LOCALE_NAME, locale);
			return {
				request: {
					headers,
				},
			};
		}
		function rewrite(url) {
			const urlObj = new URL(url, request.url);
			if (request.nextUrl.basePath) {
				urlObj.pathname = utils.applyBasePath(
					urlObj.pathname,
					request.nextUrl.basePath
				);
			}
			return server.NextResponse.rewrite(urlObj, getResponseInit());
		}
		function redirect(url, redirectDomain) {
			const urlObj = new URL(url, request.url);
			if (domainConfigs.length > 0) {
				if (!redirectDomain) {
					const bestMatchingDomain = utils.getBestMatchingDomain(
						domain,
						locale,
						domainConfigs
					);
					if (bestMatchingDomain) {
						redirectDomain = bestMatchingDomain.domain;
						if (
							bestMatchingDomain.defaultLocale === locale &&
							configWithDefaults.localePrefix === 'as-needed' &&
							urlObj.pathname.startsWith('/'.concat(locale))
						) {
							urlObj.pathname = utils.getNormalizedPathname(
								urlObj.pathname,
								configWithDefaults.locales
							);
						}
					}
				}
			}
			if (redirectDomain) {
				urlObj.host = redirectDomain;
				if (request.headers.get('x-forwarded-host')) {
					var _request$headers$get, _request$headers$get2;
					urlObj.protocol =
						(_request$headers$get =
							request.headers.get('x-forwarded-proto')) !== null &&
						_request$headers$get !== void 0
							? _request$headers$get
							: request.nextUrl.protocol;
					urlObj.port =
						(_request$headers$get2 =
							request.headers.get('x-forwarded-port')) !== null &&
						_request$headers$get2 !== void 0
							? _request$headers$get2
							: '';
				}
			}
			if (request.nextUrl.basePath) {
				urlObj.pathname = utils.applyBasePath(
					urlObj.pathname,
					request.nextUrl.basePath
				);
			}
			return server.NextResponse.redirect(urlObj.toString());
		}
		const normalizedPathname = utils.getNormalizedPathname(
			nextPathname,
			configWithDefaults.locales
		);
		const pathLocale = utils.getPathnameLocale(
			nextPathname,
			configWithDefaults.locales
		);
		const hasLocalePrefix = pathLocale != null;
		let response;
		let internalTemplateName;
		let pathname = nextPathname;
		if (configWithDefaults.pathnames) {
			let resolvedTemplateLocale;
			[resolvedTemplateLocale, internalTemplateName] =
				utils.getInternalTemplate(
					configWithDefaults.pathnames,
					normalizedPathname,
					locale
				);
			if (internalTemplateName) {
				const pathnameConfig =
					configWithDefaults.pathnames[internalTemplateName];
				const localeTemplate =
					typeof pathnameConfig === 'string'
						? pathnameConfig
						: pathnameConfig[locale];
				if (utils$1.matchesPathname(localeTemplate, normalizedPathname)) {
					pathname = utils.formatTemplatePathname(
						normalizedPathname,
						localeTemplate,
						internalTemplateName,
						pathLocale
					);
				} else {
					let sourceTemplate;
					if (resolvedTemplateLocale) {
						// A localized pathname from another locale has matched
						sourceTemplate =
							typeof pathnameConfig === 'string'
								? pathnameConfig
								: pathnameConfig[resolvedTemplateLocale];
					} else {
						// An internal pathname has matched that
						// doesn't have a localized pathname
						sourceTemplate = internalTemplateName;
					}
					const localePrefix =
						(hasLocalePrefix || !hasMatchedDefaultLocale) &&
						configWithDefaults.localePrefix !== 'never'
							? locale
							: undefined;
					response = redirect(
						utils.getPathWithSearch(
							utils.formatTemplatePathname(
								normalizedPathname,
								sourceTemplate,
								localeTemplate,
								localePrefix
							),
							request.nextUrl.search
						)
					);
				}
			}
		}
		if (!response) {
			if (pathname === ROOT_URL) {
				const pathWithSearch = utils.getPathWithSearch(
					'/'.concat(locale),
					request.nextUrl.search
				);
				if (
					configWithDefaults.localePrefix === 'never' ||
					(hasMatchedDefaultLocale &&
						configWithDefaults.localePrefix === 'as-needed')
				) {
					response = rewrite(pathWithSearch);
				} else {
					response = redirect(pathWithSearch);
				}
			} else {
				const internalPathWithSearch = utils.getPathWithSearch(
					pathname,
					request.nextUrl.search
				);
				if (hasLocalePrefix) {
					const normalizedPathnameWithSearch = utils.getPathWithSearch(
						normalizedPathname,
						request.nextUrl.search
					);
					if (configWithDefaults.localePrefix === 'never') {
						response = redirect(normalizedPathnameWithSearch);
					} else if (pathLocale === locale) {
						if (
							hasMatchedDefaultLocale &&
							configWithDefaults.localePrefix === 'as-needed'
						) {
							response = redirect(normalizedPathnameWithSearch);
						} else {
							if (configWithDefaults.domains) {
								const pathDomain = utils.getBestMatchingDomain(
									domain,
									pathLocale,
									domainConfigs
								);
								if (
									(domain === null || domain === void 0
										? void 0
										: domain.domain) !==
										(pathDomain === null || pathDomain === void 0
											? void 0
											: pathDomain.domain) &&
									!hasUnknownHost
								) {
									response = redirect(
										normalizedPathnameWithSearch,
										pathDomain === null || pathDomain === void 0
											? void 0
											: pathDomain.domain
									);
								} else {
									response = rewrite(internalPathWithSearch);
								}
							} else {
								response = rewrite(internalPathWithSearch);
							}
						}
					} else {
						response = redirect(
							'/'.concat(locale).concat(normalizedPathnameWithSearch)
						);
					}
				} else {
					if (
						configWithDefaults.localePrefix === 'never' ||
						(hasMatchedDefaultLocale &&
							(configWithDefaults.localePrefix === 'as-needed' ||
								configWithDefaults.domains))
					) {
						response = rewrite(
							'/'.concat(locale).concat(internalPathWithSearch)
						);
					} else {
						response = redirect(
							'/'.concat(locale).concat(internalPathWithSearch)
						);
					}
				}
			}
		}
		if (hasOutdatedCookie) {
			response.cookies.set(constants.COOKIE_LOCALE_NAME, locale, {
				path: request.nextUrl.basePath || undefined,
				sameSite: constants.COOKIE_SAME_SITE,
				maxAge: constants.COOKIE_MAX_AGE,
			});
		}
		if (
			configWithDefaults.localePrefix !== 'never' &&
			configWithDefaults.alternateLinks &&
			configWithDefaults.locales.length > 1
		) {
			var _configWithDefaults$p;
			response.headers.set(
				'Link',
				getAlternateLinksHeaderValue.default({
					config: configWithDefaults,
					localizedPathnames:
						internalTemplateName != null
							? (_configWithDefaults$p = configWithDefaults.pathnames) ===
									null || _configWithDefaults$p === void 0
								? void 0
								: _configWithDefaults$p[internalTemplateName]
							: undefined,
					request,
					resolvedLocale: locale,
				})
			);
		}
		return response;
	};
}
