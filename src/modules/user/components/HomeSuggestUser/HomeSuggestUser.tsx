'use client';
import Link from 'next/link';
import React from 'react';
import HomeSuggestUserItem from './HomeSuggestUserItem';
import { useInfiniteUserStory } from '@/modules/user-story/hooks/use-infinite-user-story.hook';
import { useInfiniteUser } from '../../hooks/use-infinite-user.hook';
import { users } from '@/data/user.data';

export default function HomeSuggestUser() {
	const { data } = useInfiniteUser({ page: 0, size: 20 });

	return (
		<div className='w-full'>
			<div className='flex items-center mb-3 text-sm'>
				<span className='text-text-secondary dark:text-text-secondaryDark'>
					Gợi ý cho bạn
				</span>

				<Link
					href='/explore/people'
					className='text-black dark:text-white text-xs font-semibold dark:hover:text-text-secondary ml-auto pr-0'
				>
					Xem tất cả
				</Link>
			</div>

			<div className='space-y-4'>
				<HomeSuggestUserItem user={users[0]} />
				<HomeSuggestUserItem user={users[0]} />
				<HomeSuggestUserItem user={users[0]} />
				<HomeSuggestUserItem user={users[0]} />
				<HomeSuggestUserItem user={users[0]} />
				<HomeSuggestUserItem user={users[0]} />
			</div>
		</div>
	);
}
