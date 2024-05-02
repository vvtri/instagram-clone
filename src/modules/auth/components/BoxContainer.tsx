'use client';
import { cn } from '@/utilities/tailwind/cn';
import React, { PropsWithChildren } from 'react';
import { useAuth } from '../hooks/use-auth.hook';

type BoxContainerProps = PropsWithChildren<{
	className?: string;
}>;

export default function AuthBoxContainer({
	children,
	className,
}: BoxContainerProps) {
	return (
		<section className='w-full'>
			<div
				className={cn(
					'mx-auto flex flex-col items-center w-[350px] border-instagram-auth border px-10',
					className
				)}
			>
				{children}
			</div>
		</section>
	);
}
