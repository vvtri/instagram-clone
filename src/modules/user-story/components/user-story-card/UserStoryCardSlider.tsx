'use client';
import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import React, { ReactNode } from 'react';
import {
	ScrollMenu,
	VisibilityContext,
	publicApiType,
} from 'react-horizontal-scrolling-menu';
import UserStoryCard, { UserStoryCardSkeleton } from './UserStoryCard';
import { cn } from '@/utilities/tailwind/cn';
import AddUserStoryBtn from './AddUserStoryBtn';
import { useInfiniteUserStory } from '../../hooks/use-infinite-user-story.hook';

type UserStorySliderProps = {
	className?: string;
};

export default function UserStoryCardSlider({
	className,
}: UserStorySliderProps) {
	const { data } = useInfiniteUserStory({
		page: 1,
		size: 20,
	});

	let cards: React.ReactElement<{
		itemId: string;
	}>[] = [];

	if (data) {
		cards = data.pages.flatMap((page) =>
			page.data.map((item, idx) => (
				<UserStoryCard
					key={item.id}
					itemId={item.id.toString()}
					userStory={item}
				/>
			))
		);

		if (typeof window !== 'undefined') {
			if (screen?.width < 640) {
				cards.unshift(
					<AddUserStoryBtn
						key='add-user-story-btn'
						itemId='add-user-story-btn'
					/>
				);
			}
		}
	} else {
		cards = Array(20)
			.fill(0)
			.map((item, idx) => (
				<UserStoryCardSkeleton
					itemId={`skeleton-${idx}`}
					key={`skeleton-${idx}`}
				/>
			));
	}

	return (
		<div className='py-3 pt-0 border-b border-separator sm:pb-5 sm:border-none'>
			<ScrollMenu
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}
				wrapperClassName='relative no-scrollbar'
			>
				{cards}
			</ScrollMenu>
		</div>
	);
}

const LeftArrow = () => {
	const visibility = React.useContext<publicApiType>(VisibilityContext);
	const isFirstItemVisible = visibility.useIsVisible('first', true);

	return (
		<div
			className={cn(
				'hidden absolute top-[calc(50%_-_33px)] left-0 opacity-1 visible pointer-events-auto transition z-10 cursor-pointer sm:block',
				{ 'opacity-1 invisible pointer-events-none': isFirstItemVisible }
			)}
			onClick={() => visibility.scrollPrev()}
		>
			<InstaImgIcon
				url='https://static.cdninstagram.com/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png'
				backgroundPosition='-294px -226px'
				height={45}
				width={45}
			/>
		</div>
	);
};

const RightArrow = () => {
	const visibility = React.useContext<publicApiType>(VisibilityContext);
	const isLastItemVisible = visibility.useIsVisible('last', true);

	return (
		<div
			className={cn(
				'hidden absolute top-[calc(50%_-_33px)] right-0 opacity-1 visible pointer-events-auto transition z-10 cursor-pointer sm:block',
				{ 'opacity-1 invisible pointer-events-none': isLastItemVisible }
			)}
			onClick={() => visibility.scrollNext()}
		>
			<InstaImgIcon
				url='https://static.cdninstagram.com/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png'
				backgroundPosition='-294px -273px'
				height={45}
				width={45}
			/>
		</div>
	);
};
