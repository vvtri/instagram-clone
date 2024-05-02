import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';

// TODO: Add API and props later
type UserStoryCardProps = {};

export default function UserStoryCard() {
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
