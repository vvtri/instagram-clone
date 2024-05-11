'use client';

import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';
import {
	getPostDetailLink,
	getUserProfileLink,
} from '@/modules/common/helpers/link.helper';
import { useResponsive } from '@/modules/common/hooks/use-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useInfinitePost } from '../hooks/use-infinite-post.hook';
import { PostModel } from '../apis/post.api';
import { useToast } from '@/modules/common/hooks/use-toast.hook';
import { useTranslations } from 'next-intl';

type PostSuggestionProps = {
	post: PostModel;
};

export default function PostSuggestion(props: PostSuggestionProps) {
	const { post } = props;
	const { isExtraLargeDevice } = useResponsive();
	const { warning } = useToast();
	const t = useTranslations('Client');

	const suggestAmount = isExtraLargeDevice ? 8 : 6;

	const { data, isLoading } = useInfinitePost({
		size: suggestAmount,
	});

	let postComps: ReactNode[];

	if (data) {
		postComps = data.pages.flatMap((page) =>
			page.data.map((item) => (
				<Link
					key={item.id}
					href={getPostDetailLink(item.id)}
					className='relative w-full h-full aspect-square'
				>
					<Image src={item.images[0]} fill alt='' className='object-cover' />
				</Link>
			))
		);
	} else {
		postComps = Array(suggestAmount)
			.fill(0)
			.map((item, idx) => (
				<BoxSkeleton
					key={`skeleton-${idx}`}
					containerClassName='h-full aspect-square'
				/>
			));
	}

	return (
		<div className='w-full'>
			<p className='text-sm mb-4'>
				<span className='text-text-secondary'>
					{t('post.common.morePost')}{' '}
				</span>
				<Link
					href={getUserProfileLink(post.user.username)}
					className='text-text-primary font-semibold'
				>
					{post.user.username}
				</Link>
			</p>

			<div className='grid grid-cols-3 gap-1 w-full xl:grid-cols-4'>
				{postComps}
			</div>
		</div>
	);
}
