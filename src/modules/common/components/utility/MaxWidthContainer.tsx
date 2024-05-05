import { cn } from '@/utilities/tailwind/cn';
import React, { PropsWithChildren } from 'react';

type MaxWidthContainerProps = PropsWithChildren<{
	className?: string;
}>;

export default function MaxWidthContainer({
	children,
	className,
}: MaxWidthContainerProps) {
	return (
		<div className={cn('w-full lg:pl-[72px] xl:pl-[244px]', className)}>
			{children}
		</div>
	);
}
