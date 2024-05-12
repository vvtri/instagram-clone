import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import FooterLanguageSelect from './FooterLanguageSelect';

type FooterLinkProps = PropsWithChildren<{
  href: string;
}>;

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="text-text-secondary text-xs transition capitalize group relative"
    >
      <div
        className="absolute inset-x-0 -bottom-1 h-[1px] bg-text-secondary opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible"
        aria-hidden
      />
      {children}
    </Link>
  );
};

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const t = useTranslations('Common');

  return (
    <footer className={cn('px-4 mb-20 mt-6', className)}>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <FooterLink href="#">{t('footer.meta')}</FooterLink>
        <FooterLink href="#">{t('footer.about')}</FooterLink>
        <FooterLink href="#">{t('footer.blog')}</FooterLink>
        <FooterLink href="#">{t('footer.jobs')}</FooterLink>
        <FooterLink href="#">{t('footer.help')}</FooterLink>
        <FooterLink href="#">{t('footer.api')}</FooterLink>
        <FooterLink href="#">{t('footer.privacy')}</FooterLink>
        <FooterLink href="#">{t('footer.terms')}</FooterLink>
        <FooterLink href="#">{t('footer.locations')}</FooterLink>
        <FooterLink href="#">{t('footer.instagramLite')}</FooterLink>
        <FooterLink href="#">{t('footer.threads')}</FooterLink>
        <FooterLink href="#">
          {t('footer.contactUploadingAndNonUsers')}
        </FooterLink>
        <FooterLink href="#">{t('footer.metaVerified')}</FooterLink>
      </div>

      <div className="w-full text-center space-x-3 text-xs text-text-secondary mt-4">
        <FooterLanguageSelect />

        <span>{t('footer.copyright')}</span>
      </div>
    </footer>
  );
}
