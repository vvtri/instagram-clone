import { cn } from '@/utilities/tailwind/cn';
import React, { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

type AvatarSkeletonProps = {
	className?: string;
	containerClassName?: string;
};

export default function AvatarSkeleton(props: AvatarSkeletonProps) {
	const { className, containerClassName } = props;

	return (
		<Skeleton
			containerClassName={cn(
				'flex items-center justify-center shrink-0',
				containerClassName
			)}
			className={cn('aspect-square w-full mr-3', className)}
			circle
		/>
	);
}
