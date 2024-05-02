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
		<div className={cn('w-full', className)}>
			<div className='sm:max-w-[630px] mx-auto'>{children}</div>
		</div>
	);
}
