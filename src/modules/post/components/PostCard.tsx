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

type PostCardProps = {
	className?: string;
};

export default function PostCard({ className }: PostCardProps) {
	return (
		<div className={cn('w-full sm:max-w-[470px]', className)}>
			<div className='flex items-center p-3'>
				<ImageWithGradientBorder
					length={32}
					imageUrl='/home/user-story/card-img.jpg'
				/>

				<div className='flex flex-col ml-3'>
					<div className='flex items-center font-semibold text-sm space-x-1'>
						<span>hungvanngo</span>
						<VerifySvgIcon />
						<span className='text-sm'>•</span>
						<span className='text-sm'>1 ngày</span>
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
				{Array(3)
					.fill(0)
					.map((item, idx) => (
						<div key={idx} className='relative w-full aspect-[4/5]'>
							<Image src='/post/lowg.jpg' fill alt='' />
						</div>
					))}
			</Slider>

			<div className='p-5 pb-3'>
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

				<p className='font-semibold text-sm mt-3'>717.875 lượt thích</p>

				<div className='mt-2'>
					<Comment />
				</div>

				<p className='text-sm text-text-secondary mt-1'>
					Xem tất cả 337 bình luận
				</p>
				<p className='text-xs text-text-secondary'>1 ngày trước</p>
			</div>
		</div>
	);
}
