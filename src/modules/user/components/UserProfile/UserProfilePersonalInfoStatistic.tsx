import { cn } from '@/utilities/tailwind/cn';
import React from 'react';

type UserProfilePersonalInfoStatisticProps = {
	className?: string;
};

export default function UserProfilePersonalInfoStatistic({
	className,
}: UserProfilePersonalInfoStatisticProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-around py-5 gap-5 text-text-secondary dark:text-text-secondaryDark',
				className
			)}
		>
			<p className=''>
				<span className='text-text-primary font-semibold dark:text-text-primaryDark'>
					{' '}
					0{' '}
				</span>
				<span>bài viết</span>
			</p>

			<p className=''>
				<span className='text-text-primary font-semibold dark:text-text-primaryDark'>
					{' '}
					1{' '}
				</span>
				<span>người theo dõi</span>
			</p>

			<p className=''>
				<span>Đang theo dõi</span>
				<span className='text-text-primary font-semibold dark:text-text-primaryDark'>
					{' '}
					1{' '}
				</span>
				<span>người dùng</span>
			</p>
		</div>
	);
}
