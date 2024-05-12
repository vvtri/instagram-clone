'use client';
import { LANGUAGES, LANGUAGE_COOKIE_KEY } from '@/constants/i18n.constant';
import { ACCESS_TOKEN_COOKIE_KEY } from '@/modules/auth/constants/auth.constant';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { useChangeLanguage } from '@/modules/user/hooks/use-change-language.hook';
import { cn } from '@/utilities/tailwind/cn';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

type FooterLanguageSelectProps = {
  className?: string;
};

export default function FooterLanguageSelect({
  className,
}: FooterLanguageSelectProps) {
  const router = useRouter();
  const cookies = useCookies();
  const { user } = useAuth();
  const { mutateAsync, isPending } = useChangeLanguage();

  const [currentLang, setCurrentLang] = useState(
    (cookies.get(LANGUAGE_COOKIE_KEY) ||
      'en') as (typeof LANGUAGES)[number]['value'],
  );

  const handleChangeLanguage = async (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as (typeof LANGUAGES)[number]['value'];
    // changeLanguageAction(lang);
    setCurrentLang(lang);

    if (user) {
      await mutateAsync({ token: cookies.get(ACCESS_TOKEN_COOKIE_KEY)!, lang });
    }
    cookies.set(LANGUAGE_COOKIE_KEY, lang);
    router.refresh();
  };

  return (
    <select
      className={cn(
        'focus:outline-text-secondary cursor-pointer border-separator border',
        className,
      )}
      onChange={handleChangeLanguage}
      value={currentLang}
      disabled={isPending}
    >
      {LANGUAGES.map((lang) => (
        <option key={`${lang.label}${lang.value}`} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
