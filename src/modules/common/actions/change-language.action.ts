'use server';
import { cookies } from 'next/headers';
import { LANGUAGES, LANGUAGE_COOKIE_KEY } from '../../../constants/i18n.constant';

export const changeLanguageAction = (
	lang: (typeof LANGUAGES)[number]['value']
) => {
	cookies().set(LANGUAGE_COOKIE_KEY, lang);
};
