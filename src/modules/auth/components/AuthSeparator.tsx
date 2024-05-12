import { useTranslations } from 'next-intl';

export default function AuthSeparator() {
  const t = useTranslations('Client');

  return (
    <div className="flex items-center w-full">
      <div className="h-[1px] scale-y-90 w-full bg-separator"></div>
      <span className="uppercase text-[13px] font-semibold text-text-secondary mx-[18px]">
        {t('common.word.or')}
      </span>
      <div className="h-[1px] scale-y-90 w-full bg-separator"></div>
    </div>
  );
}
