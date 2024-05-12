'use client';

import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type AddUserStoryBtnProps = {
  itemId: string;
  className?: string;
};

export default function AddUserStoryBtn({ className }: AddUserStoryBtnProps) {
  const t = useTranslations('Client');

  return (
    <Link
      className={cn('flex flex-col px-1 items-center w-20', className)}
      href="#"
      suppressHydrationWarning
    >
      <div className="w-[66px] h-[66px] relative p-[2px] rounded-full flex items-center justify-center mb-2">
        <Image
          src="/common/empty-avt.jpg"
          width={56}
          height={56}
          alt="UserStory Image"
          className="rounded-full outline-[3px] outline-white outline"
        />
        <svg
          aria-label="Biểu tượng dấu cộng"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
          className="block absolute top-[44px] right-[4px]  text-btn-primary"
        >
          <title>Biểu tượng dấu cộng</title>
          <path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z"></path>
        </svg>
      </div>

      <span className="text-xs text-center text-ellipsis line-clamp-1 w-full block">
        {t('userStory.add.yourNews')}
      </span>
    </Link>
  );
}
