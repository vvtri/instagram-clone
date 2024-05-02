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
		<div className='w-full'>
			{Array(5)
				.fill(0)
				.map((item, idx) => (
					<PostCard key={idx} />
				))}
		</div>
	);
}
