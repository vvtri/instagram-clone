import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

// TODO: Add API and props later
type UserStoryCardProps = {
	itemId: string;
};

export default function UserStoryCard({ itemId }: UserStoryCardProps) {
	// const visibility = useContext(VisibilityContext);
	// const isVisible = visibility.useIsVisible(itemId);

	// console.log('itemId isVisible ', isVisible);

	return (
		<Link className='flex flex-col px-1 items-center w-20' href='#'>
			<ImageWithGradientBorder
				length={56}
				className='mb-2'
				imageUrl='/home/user-story/card-img.jpg'
			/>

			<span className='text-xs text-center text-ellipsis line-clamp-1 w-full block'>
				lowgasdadasdsa
			</span>
		</Link>
	);
}
