'use client';
import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';

type UserProfilePersonalInfoStatisticProps = {
  className?: string;
};

export default function UserProfilePersonalInfoStatistic({
  className,
}: UserProfilePersonalInfoStatisticProps) {
  const t = useTranslations('Client');

  return (
    <div
      className={cn(
        'flex items-center justify-around py-5 gap-5 text-text-secondary',
        className,
      )}
    >
      <p className="">
        {t.rich('user.profile.postAmount', {
          posts: 3,
          bold: (posts) => (
            <span className="text-text-primary font-semibold">{posts}</span>
          ),
        })}
      </p>

      <p className="">
        {t.rich('user.profile.followerAmount', {
          followers: 3,
          bold: (posts) => (
            <span className="text-text-primary font-semibold">{posts}</span>
          ),
        })}
      </p>

      <p className="">
        {t.rich('user.profile.followingAmount', {
          following: 3,
          bold: (posts) => (
            <span className="text-text-primary font-semibold">{posts}</span>
          ),
        })}
      </p>
    </div>
  );
}
