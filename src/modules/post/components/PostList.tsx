'use client';
import UserStoryCard from '@/modules/user-story/components/UserStoryCard';
import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import PostCard, { PostCardSkeleton } from './PostCard';
import { PostModel } from '../apis/post.api';
import { useInfinitePost } from '../hooks/use-infinite-post.hook';
import LoadingSpinner from '@/modules/common/components/utility/LoadingSpinner';

type ListPostProps = {
	className?: string;
};

export default function PostList({ className }: ListPostProps) {
	const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfinitePost({
			page: 0,
			size: 20,
		});

	let postCards: ReactNode[] = [];

	if (data) {
		postCards = data.pages.flatMap((page) =>
			page.data.map((item) => <PostCard post={item} key={item.id} />)
		);
	} else {
		postCards = Array(10)
			.fill(0)
			.map((item, idx) => <PostCardSkeleton key={idx} />);
	}

	return (
		<div className='w-full flex items-center flex-col'>
			<div className='w-full pb-[4000px] flex-col items-center flex'>
				{postCards}
			</div>

			{isFetchingNextPage && <LoadingSpinner iconClass='w-14 h-14' />}
		</div>
	);
}
