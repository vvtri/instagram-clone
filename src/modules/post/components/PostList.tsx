'use client';
import LoadingSpinner from '@/modules/common/components/utility/LoadingSpinner';
import { ReactNode } from 'react';
import { useInfinitePost } from '../hooks/use-infinite-post.hook';
import PostCard, { PostCardSkeleton } from './PostCard';

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
		<div className='w-full flex items-center flex-col overflow-hidden'>
			<div
				className='w-20 h-20'
				style={{
					// background: 'red',
					background:
						'linear-gradient(to right, var(--logo-linear-gradient))',
				}}
			></div>

			<div className='w-full pb-[4000px] flex-col items-center flex'>
				{postCards}
			</div>

			{isFetchingNextPage && <LoadingSpinner iconClass='w-14 h-14' />}
		</div>
	);
}
