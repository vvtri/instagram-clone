'use client';
import { LANGUAGES, LANGUAGE_COOKIE_KEY } from '@/constants/i18n.constant';
import React, { ChangeEvent, useState } from 'react';
import { changeLanguageAction } from '../../actions/change-language.action';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function FooterLanguageSelect() {
	const router = useRouter();

	const [currentLang, setCurrentLang] = useState(
		(getCookie(LANGUAGE_COOKIE_KEY) ||
			'en') as (typeof LANGUAGES)[number]['value']
	);


	const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value as (typeof LANGUAGES)[number]['value'];
		changeLanguageAction(lang);

		setCurrentLang(lang);
		router.refresh();
	};

	return (
		<select
			className='focus:outline-text-secondary'
			onChange={handleChangeLanguage}
			value={currentLang}
		>
			{LANGUAGES.map((lang) => (
				<option key={`${lang.label}${lang.value}`} value={lang.value}>
					{lang.label}
				</option>
			))}
		</select>
	);
}
