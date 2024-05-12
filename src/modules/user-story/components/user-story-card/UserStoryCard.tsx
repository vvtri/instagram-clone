import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import Link from 'next/link';
import { useContext } from 'react';
import {
  publicApiType,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import Skeleton from 'react-loading-skeleton';
import { UserStoryModel } from '../../apis/user-story.api';

type UserStoryCardProps = {
  itemId: string;
  userStory: UserStoryModel;
};

export default function UserStoryCard({
  userStory,
  itemId,
}: UserStoryCardProps) {
  const visibility = useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <Link
      className="flex flex-col px-1 items-center w-20"
      href={`/stories/${userStory.user.username}/${userStory.id}`}
    >
      <ImageWithGradientBorder
        length={56}
        className="mb-2"
        imageUrl={userStory.user.avt}
        imgProps={{ priority: true }}
        imagePriority={isVisible}
      />

      <span className="text-xs text-center text-ellipsis line-clamp-1 w-full block">
        {userStory.user.username}
      </span>
    </Link>
  );
}

export const UserStoryCardSkeleton = (
  props: Pick<UserStoryCardProps, 'itemId'>,
) => {
  return (
    <div className="flex flex-col px-1 items-center w-20">
      <Skeleton
        className="w-[66px] aspect-square rounded-full "
        containerClassName="flex rounded-full mb-2 w-[66px] overflow-hidden"
      />

      <Skeleton
        className="h-full w-full"
        containerClassName="flex h-3 w-full"
      />
    </div>
  );
};
