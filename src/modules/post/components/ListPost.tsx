'use client';
import UserStoryCard from '@/modules/user-story/components/UserStoryCard';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import PostCard from './PostCard';

type ListPostProps = {
	className?: string;
};

export default function ListPost({ className }: ListPostProps) {
	return (
		<div className='w-full flex items-center flex-col'>
			<div className='w-full pb-[4000px] flex-col items-center flex'>
				{Array(5)
					.fill(0)
					.map((item, idx) => (
						<PostCard key={idx} />
					))}
			</div>

			{/* loading */}
		</div>
	);
}
