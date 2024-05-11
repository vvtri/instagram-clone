'use client';

import DirectSvgIcon from '@/modules/common/components/icon/svg-icon/DirectSvgIcon';
import HeartSvgIcon from '@/modules/common/components/icon/svg-icon/HeartSvgIcon';
import MoreSvgIcon from '@/modules/common/components/icon/svg-icon/MoreSvgIcon';
import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import {
  useAppDispatch,
  useAppSelector,
} from '@/modules/common/hooks/store.hook';
import { cn } from '@/utilities/tailwind/cn';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import ReactInstaStories from 'react-insta-stories';
import { UserStoryModel } from '../../apis/user-story.api';
import { getFirstImageFromUserStory } from '../../helpers/get-first-image-from-user-story';
import { setIsUserInteracted } from '../../slices/user-story.slice';
import UserStoryDetailWarning from './UserStoryDetailWarning';
import CloseSvgIcon from '@/modules/common/components/icon/svg-icon/CloseSvgIcon';
import { useFormatter, useTranslations } from 'next-intl';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';

type UserStoryDetailProps = {
  userStory: UserStoryModel;
  isActive?: boolean;
  onAllStoriesEnd?: () => any;
  goToSlide?: () => any;
  onExitClicked?: () => any;
};

export default function UserStoryDetail(
  props: UserStoryDetailProps,
): ReactElement<UserStoryDetailProps> {
  const {
    userStory,
    isActive = false,
    onAllStoriesEnd,
    goToSlide,
    onExitClicked,
  } = props;
  const [previewImage, setPreviewImage] = useState('');
  const dispatch = useAppDispatch();
  const isUserInteracted = useAppSelector(
    ({ userStory }) => userStory.isUserInteracted,
  );
  const format = useFormatter();
  const t = useTranslations('Client');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const imageUrl = await getFirstImageFromUserStory(userStory.media);
      setPreviewImage(imageUrl);
    })();
  }, []);

  return (
    <div className={cn('h-full w-full flex items-center justify-center ')}>
      <div
        className={cn(
          'relative text-sm h-full w-full rounded-lg overflow-hidden bg-bg-primary user-story-detail',
          { 'user-story-detail-active': isActive },
        )}
        onClick={() => !isActive && goToSlide?.()}
      >
        {/* header */}
        <div
          className="absolute top-0 p-5 inset-x-0 w-full z-float"
          onClick={(e) => isActive && e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-[32px] aspect-square rounded-full overflow-hidden">
                <Image
                  src={userStory.user.avt}
                  fill
                  alt=""
                  sizes={genImageSizesProp({ default: '32px' })}
                />
              </div>

              <p className="text-sm">{userStory.user.username}</p>

              <VerifySvgIcon className="text-white" />

              <span className="text-text-secondary">
                {format.relativeTime(new Date(userStory.createdAt))}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MoreSvgIcon className="cursor-pointer" />
              <div
                className="p-4 xl:hidden cursor-pointer"
                onClick={onExitClicked}
              >
                <CloseSvgIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className={cn('absolute bottom-0 inset-x-0 p-4 hidden', {
            block: isActive && isUserInteracted,
          })}
        >
          <div className="flex gap-3 items-center">
            <div className="pl-[11px] pr-[8px] border-[2px] border-gray-200 rounded-full flex-grow">
              <ReactTextareaAutosize
                minRows={1}
                maxRows={3}
                placeholder={t('post.common.addComment')}
                className="outline-none border-none flex-grow bg-transparent text-sm resize-none pt-3 pb-2 px-[9px] no-scrollbar w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <HeartSvgIcon className="flex-shrink-0" />
            <DirectSvgIcon className="flex-shrink-0" />
          </div>
        </div>

        {!isUserInteracted && isActive && (
          <UserStoryDetailWarning
            userStory={userStory}
            onConfirm={() => dispatch(setIsUserInteracted(true))}
          />
        )}

        {isActive && isUserInteracted && (
          <ReactInstaStories
            stories={userStory.media.map((item) => ({
              type: item.type,
              url: item.src,
              duration: 5000,
            }))}
            defaultInterval={10000}
            width="100%"
            isPaused={true}
            onAllStoriesEnd={onAllStoriesEnd}
          />
        )}

        {(!isActive || !isUserInteracted) && previewImage && (
          <div className="hidden relative h-full w-full lg:block">
            <Image src={previewImage} fill alt="" className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
