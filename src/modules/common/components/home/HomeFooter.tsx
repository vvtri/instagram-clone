import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const HOME_FOOTER_DATA = [
	{
		href: '/',
		i18nKey: 'about',
	},
	{
		href: '/',
		i18nKey: 'help',
	},
	{
		href: '/',
		i18nKey: 'blog',
	},
	{
		href: '/',
		i18nKey: 'jobs',
	},
	{
		href: '/',
		i18nKey: 'privacy',
	},
	{
		href: '/',
		i18nKey: 'terms',
	},
	{
		href: '/',
		i18nKey: 'locations',
	},
	{
		href: '/',
		i18nKey: 'language',
	},
	{
		href: '/',
		i18nKey: 'metaVerified',
	},
];

export default function HomeFooter() {
	const tFooter = useTranslations('Footer');

	return (
		<div className='flex flex-wrap'>
			{HOME_FOOTER_DATA.map((item, idx) => (
				<div key={item.i18nKey} className='text-xs'>
					<Link className='text-text-secondary capitalize' href={item.href}>
						{tFooter(item.i18nKey as any)}
					</Link>

					{idx !== HOME_FOOTER_DATA.length - 1 && (
						<span className='px-1 opacity-30'>•</span>
					)}
				</div>
			))}
		</div>
	);
}
