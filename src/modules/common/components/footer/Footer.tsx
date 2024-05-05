import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import FooterLanguageSelect from './FooterLanguageSelect';
import { cn } from '@/utilities/tailwind/cn';

type FooterLinkProps = PropsWithChildren<{
	href: string;
}>;

const FooterLink = ({ href, children }: FooterLinkProps) => {
	return (
		<Link
			href={href}
			className='text-text-secondary text-xs transition border-text-secondary capitalize hover:border-b'
		>
			{children}
		</Link>
	);
};

type FooterProps = {
	className?: string;
};

export default function Footer({ className }: FooterProps) {
	const t = useTranslations('Footer');

	return (
		<footer className={cn('px-4 mb-20 mt-6', className)}>
			<div className='flex flex-wrap gap-2 items-center justify-center'>
				<FooterLink href='#'>{t('meta')}</FooterLink>
				<FooterLink href='#'>{t('about')}</FooterLink>
				<FooterLink href='#'>{t('blog')}</FooterLink>
				<FooterLink href='#'>{t('jobs')}</FooterLink>
				<FooterLink href='#'>{t('help')}</FooterLink>
				<FooterLink href='#'>{t('API')}</FooterLink>
				<FooterLink href='#'>{t('privacy')}</FooterLink>
				<FooterLink href='#'>{t('terms')}</FooterLink>
				<FooterLink href='#'>{t('locations')}</FooterLink>
				<FooterLink href='#'>{t('instagramLite')}</FooterLink>
				<FooterLink href='#'>{t('threads')}</FooterLink>
				<FooterLink href='#'>{t('contactUploadingAndNonUsers')}</FooterLink>
				<FooterLink href='#'>{t('metaVerified')}</FooterLink>
			</div>

			<div className='w-full text-center space-x-3 text-xs text-text-secondary mt-4'>
				<FooterLanguageSelect />

				<span>&copy; 2024 Instagram from Meta</span>
			</div>
		</footer>
	);
}
