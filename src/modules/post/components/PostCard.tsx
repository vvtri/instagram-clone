'use client';

import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { cn } from '@/utilities/tailwind/cn';
import { PostModel } from '../apis/post.api';
import Skeleton from 'react-loading-skeleton';
import PostCommentInput from './PostCommentInput';
import BookmarkSvgIcon from '@/modules/common/components/icon/svg-icon/BookmarkSvgIcon';
import HeartSvgIcon from '@/modules/common/components/icon/svg-icon/HeartSvgIcon';
import MessageSvgIcon from '@/modules/common/components/icon/svg-icon/MessageSvgIcon';
import ShareSvgIcon from '@/modules/common/components/icon/svg-icon/ShareSvgIcon';
import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import MoreSvgIcon from '@/modules/common/components/icon/svg-icon/MoreSvgIcon';
import { useFormatter, useTranslations } from 'next-intl';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';
import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';
import AvatarSkeleton from '@/modules/common/components/skeleton/AvatarSkeleton';

type PostCardProps = {
	className?: string;
	post: PostModel;
};

export default function PostCard({ className, post }: PostCardProps) {
	const format = useFormatter();
	const t = useTranslations('Client');

	return (
		<div
			className={cn(
				'w-full sm:max-w-[470px] pt-2 lg:border-b lg:border-separator lg:dark:border-separatorDark',
				className
			)}
		>
			<div className='flex items-center p-3'>
				<ImageWithGradientBorder length={32} imageUrl={post.user.avt} />

				<div className='flex flex-col ml-3'>
					<div className='flex items-center font-semibold text-sm space-x-1'>
						<span>{post.user.username}</span>
						<VerifySvgIcon />
						<span className='text-sm'>•</span>
						<span className='text-sm text-text-secondary dark:text-text-secondaryDark'>
							{format.relativeTime(new Date(Date.now() - 86500000))}
						</span>
					</div>

					<span className='text-xs font-normal'>
						Jungle
						<span className='text-sm mx-1'>•</span>
						I've Been In Love
					</span>
				</div>

				<div className='ml-auto'>
					<MoreSvgIcon />
				</div>
			</div>

			<Slider
				dots={true}
				arrows={true}
				infinite={false}
				speed={100}
				className='w-full post-image-slide'
				slidesToShow={1}
			>
				{post.images.map((item, idx) => (
					<div key={idx}>
						<div
							className='relative w-full aspect-square'
							style={{ aspectRatio: post.imageRatio }}
						>
							<Image
								src={item}
								sizes={genImageSizesProp({ default: '100vw', sm: '640px' })}
								fill
								alt=''
								priority
							/>
						</div>
					</div>
				))}
			</Slider>

			<div className='p-5 pb-3 lg:px-0'>
				<div className='flex items-center'>
					<div className='flex space-x-5'>
						<HeartSvgIcon />
						<MessageSvgIcon />
						<ShareSvgIcon />
					</div>

					<div className='ml-auto'>
						<BookmarkSvgIcon />
					</div>
				</div>

				<p className='font-semibold text-sm mt-3'>
					{t('post.postCard.likeAmount', { likes: post.likeAmount })}
				</p>

				<div className='mt-2'>
					<div className=''>
						<div className='flex space-x-1 items-center'>
							<p className='text-sm font-semibold'>{post.user.username}</p>
							<VerifySvgIcon />
							<p className='text-sm'>{post.title}</p>
						</div>
					</div>
				</div>

				<p className='text-sm text-text-secondary mt-1 dark:text-text-secondaryDark'>
					{t('post.postCard.viewComment', { comments: post.commentAmount })}
				</p>

				<PostCommentInput />
			</div>
		</div>
	);
}

export function PostCardSkeleton({
	className,
}: Pick<PostCardProps, 'className'>) {
	return (
		<div className={cn('w-full sm:max-w-[470px] mb-10 pt-6', className)}>
			<div className='h-[42px] flex mb-3'>
				<AvatarSkeleton className='h-[42px]' />

				<BoxSkeleton />
			</div>

			<Skeleton containerClassName='flex' className='w-full aspect-square' />
		</div>
	);
}
