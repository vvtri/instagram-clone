'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

type NavbarItemProps = {
	highlight?: boolean;
	href: string;
	icon: ReactNode;
	label: ReactNode;
};
export default function NavbarItem(props: NavbarItemProps) {
	const { href, icon, label, highlight } = props;

	return (
		<Link
			href={href}
			className='transition lg:py-4 xl:w-full xl:px-3 xl:flex xl:items-center xl:hover:bg-bg-hoverOverlayDark'
		>
			{icon}

			<span
				className='hidden xl:block text-base text-text-primary dark:text-text-primaryDark ml-5'
				style={{ fontWeight: highlight ? 700 : 400 }}
			>
				{label}
			</span>
		</Link>
	);
}
