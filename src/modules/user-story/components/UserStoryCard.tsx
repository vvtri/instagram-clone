import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { UserStoryModel } from '../apis/user-story.api';

// TODO: Add API and props later
type UserStoryCardProps = {
	itemId: string;
	userStory: UserStoryModel;
};

export default function UserStoryCard({
	itemId,
	userStory,
}: UserStoryCardProps) {
	// const visibility = useContext(VisibilityContext);
	// const isVisible = visibility.useIsVisible(itemId);

	// console.log('itemId isVisible ', isVisible);

	return (
		<Link className='flex flex-col px-1 items-center w-20' href='#'>
			<ImageWithGradientBorder
				length={56}
				className='mb-2'
				imageUrl={userStory.user.avt}
				imgProps={{ priority: true }}
			/>

			<span className='text-xs text-center text-ellipsis line-clamp-1 w-full block'>
				{userStory.user.username}
			</span>
		</Link>
	);
}

export const UserStoryCardSkeleton = (
	props: Pick<UserStoryCardProps, 'itemId'>
) => {
	return (
		<div className='flex flex-col px-1 items-center w-20'>
			<Skeleton
				className='w-[66px] aspect-square rounded-full '
				containerClassName='flex rounded-full mb-2 w-[66px] overflow-hidden'
			/>

			<Skeleton
				className='h-full w-full'
				containerClassName='flex h-3 w-full'
			/>
		</div>
	);
};
