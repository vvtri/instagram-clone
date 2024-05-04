'use client';

import MoreSvgIcon from '@/modules/common/components/icon/MoreSvgIcon';
import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import HeartSvgIcon from '@/modules/common/components/icon/HeartSvgIcon';
import MessageSvgIcon from '@/modules/common/components/icon/MessageSvgIcon';
import ShareSvgIcon from '@/modules/common/components/icon/ShareSvgIcon';
import BookmarkSvgIcon from '@/modules/common/components/icon/BookmarkSvgIcon';
import Comment from '@/modules/comment/components/Comment';
import { cn } from '@/utilities/tailwind/cn';
import VerifySvgIcon from '@/modules/common/components/icon/VerifySvgIcon';
import { PostModel } from '../apis/post.api';
import Skeleton from 'react-loading-skeleton';
import PostCommentInput from './PostCommentInput';

type PostCardProps = {
	className?: string;
	post: PostModel;
};

export default function PostCard({ className, post }: PostCardProps) {
	return (
		<div
			className={cn(
				'w-full sm:max-w-[470px] pt-2 lg:border-b lg:border-separator lg:dark:border-elevatedSeparator',
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
							{/* todo: format date by language */}1 ngày
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
							<Image src={item} fill alt='' />
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
					{post.likeAmount} lượt thích
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
					Xem tất cả {post.commentAmount} bình luận
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
				<Skeleton
					containerClassName='flex items-center justify-center shrink-0'
					className='h-[42px] aspect-square w-full mr-3'
					circle
				/>

				<Skeleton
					containerClassName='flex w-full h-full'
					className='h-full w-full'
				/>
			</div>

			<Skeleton containerClassName='flex' className='w-full aspect-square' />
		</div>
	);
}
