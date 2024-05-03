import { cn } from '@/utilities/tailwind/cn';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type InstaLinkProps = PropsWithChildren<{
	href: string;
	className?: string;
	size?: 'sm' | 'md';
}>;

export default function InstaLink(props: InstaLinkProps) {
	const { href, className, children, size = 'sm' } = props;

	return (
		<Link
			href={href}
			className={cn(
				'text-xs text-text-link text whitespace-pre break-words dark:text-btn-primary',
				{ 'text-btn-primary text-sm font-semibold': size === 'md' },
				className
			)}
		>
			{children}
		</Link>
	);
}
