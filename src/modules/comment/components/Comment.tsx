'use client';

import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import React from 'react';
import { CommentModel } from '../apis/comment.api';
import { PostModel } from '@/modules/post/apis/post.api';
import Image from 'next/image';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { useFormatter } from 'next-intl';
import HeartSvgIcon from '@/modules/common/components/icon/svg-icon/HeartSvgIcon';
import Link from 'next/link';
import { getUserProfileLink } from '@/modules/common/helpers/link.helper';
import AvatarSkeleton from '@/modules/common/components/skeleton/AvatarSkeleton';
import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';

type CommentProps = {
	comment: CommentModel;
};

export default function Comment(props: CommentProps) {
	const { comment } = props;
	const format = useFormatter();

	return (
		<div className='flex py-3 text-sm items-center'>
			<Link
				href={getUserProfileLink(comment.user.username)}
				className='relative w-[32px] aspect-square rounded-full overflow-hidden mr-2 flex-shrink-0'
			>
				<Image src={comment.user.avt} alt='' fill className='object-cover' />
			</Link>

			<div className='flex items-center flex-grow'>
				<div className='flex flex-col justify-center grow'>
					<div className='flex gap-2 items-center'>
						<Link
							className='font-semibold'
							href={getUserProfileLink(comment.user.username)}
						>
							{comment.user?.username}
						</Link>
						<VerifySvgIcon />
						<p className=' text-text-secondary'>
							{format.relativeTime(new Date(comment.createdAt))}
						</p>
					</div>

					<p className=''>{comment.content}</p>

					<div className='flex mt-1 gap-2 text-text-secondary text-xs'>
						<span>3 likes</span>
						<span>Reply</span>
					</div>
				</div>

				<div className='flex items-center ml-auto pl-2 shrink-0'>
					<HeartSvgIcon width={16} height={16} />
				</div>
			</div>
		</div>
	);
}

export const CommentSkeleton = () => {
	return (
		<div className='flex items-center h-[44px] my-2'>
			<AvatarSkeleton className='' containerClassName='mr-3 w-[32px]' />

			<BoxSkeleton containerClassName='h-4/5' />
		</div>
	);
};
