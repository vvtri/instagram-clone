import { cn } from '@/utilities/tailwind/cn';
import React, { PropsWithChildren } from 'react';

type InstaButtonProps = PropsWithChildren<
	React.JSX.IntrinsicElements['button'] & {
		variant?: 'fill' | 'outline';
	}
>;

export default function InstaButton(props: InstaButtonProps) {
	const { children, className, variant = 'fill', ...rest } = props;

	return (
		<button
			className={cn(
				'flex items-center justify-center py-2 px-4 text-sm w-auto font-semibold cursor-pointer transition rounded-lg',
				{
					'bg-btn-primary hover:bg-btn-primaryHover text-white':
						variant === 'fill',
					'text-text-outlineBtn bg-transparent dark:text-btn-primary dark:hover:text-text-primaryDark':
						variant === 'outline',
				},
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
