'use client';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { UserStoryModel } from '../../apis/user-story.api';

type UserStoryDetailWarningProps = {
  userStory: UserStoryModel;
  onConfirm: () => any;
};

export default function UserStoryDetailWarning(
  props: UserStoryDetailWarningProps,
) {
  const { userStory, onConfirm } = props;
  const { user } = useAuth();
  const t = useTranslations('Client');

  return (
    <div className="flex h-full grow flex-col items-center justify-center px-10 text-center">
      <div className="relative w-[88px] aspect-square rounded-full overflow-hidden">
        <Image
          src={userStory.user.avt}
          fill
          alt=""
          sizes={genImageSizesProp({ default: '88px' })}
        />
      </div>

      <h3 className="text-xl font-semibold mt-5">
        {t('userStory.detailSlider.warningTitle', { username: user.username })}
      </h3>
      <p className="text-sm mt-1">
        {t('userStory.detailSlider.warningDesc', {
          username: userStory.user.username,
        })}
      </p>

      <button
        className="rounded-lg py-3 px-5 font-medium border mt-6 border-text-primary text-text-primary"
        onClick={onConfirm}
      >
        {t('userStory.detailSlider.viewStory')}
      </button>
    </div>
  );
}
