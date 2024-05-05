import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { MessageCommonKey } from '../../../../../global';

const HOME_FOOTER_DATA: { href: string; i18nKey: MessageCommonKey }[] = [
	{
		href: '/',
		i18nKey: 'footer.about',
	},
	{
		href: '/',
		i18nKey: 'footer.help',
	},
	{
		href: '/',
		i18nKey: 'footer.blog',
	},
	{
		href: '/',
		i18nKey: 'footer.jobs',
	},
	{
		href: '/',
		i18nKey: 'footer.privacy',
	},
	{
		href: '/',
		i18nKey: 'footer.terms',
	},
	{
		href: '/',
		i18nKey: 'footer.locations',
	},
	{
		href: '/',
		i18nKey: 'footer.languages',
	},
	{
		href: '/',
		i18nKey: 'footer.metaVerified',
	},
];

export default function HomeFooter() {
	const t = useTranslations('Common');

	return (
		<div className='flex flex-wrap'>
			{HOME_FOOTER_DATA.map((item, idx) => (
				<div key={item.i18nKey} className='text-xs'>
					<Link className='text-text-secondary capitalize' href={item.href}>
						{t(item.i18nKey as any)}
					</Link>

					{idx !== HOME_FOOTER_DATA.length - 1 && (
						<span className='px-1 opacity-30'>•</span>
					)}
				</div>
			))}
		</div>
	);
}
