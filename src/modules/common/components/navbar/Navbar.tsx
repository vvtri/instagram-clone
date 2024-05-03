'use client';
import React from 'react';
import HomeSvgIcon from '../icon/HomeSvgIcon';
import SearchSvgIcon from '../icon/SearchSvgIcon';
import ReelSvgIcon from '../icon/ReelSvgIcon';
import MessageSvgIcon from '../icon/MessageSvgIcon';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MessengerSvgIcon from '../icon/MessengerSvgIcon';
import PlusSvgIcon from '../icon/PlusSvgIcon';
import InstaSvgLogo from '../icon/InstagramLogoTextSvgIcon';
import InstagramLogoSvgIcon from '../icon/InstagramLogoSvgIcon';
import ExploreSvgIcon from '../icon/ExploreSvgIcon';
import ThreadSvgIcon from '../icon/ThreadSvgIcon';
import MenuSvgIcon from '../icon/MenuSvgIcon';

export default function Navbar() {
	const pathname = usePathname();
	const iconSize = 24;

	return (
		<div className='flex items-center justify-around w-full h-12 bg-white fixed bottom-0 inset-x-0 dark:bg-black text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-[72px] lg:flex-col lg:border-r lg:border-separator lg:dark:border-elevatedSeparator lg:h-full lg:justify-start lg:py-3 lg:pb-12'>
			<Link href='/' className='hidden px-3 pb-4 lg:block lg:pt-6'>
				<InstaSvgLogo className='lg:hidden' />

				<InstagramLogoSvgIcon className='hidden lg:block' />
			</Link>

			<Link href='/' className='lg:mt-8'>
				<HomeSvgIcon
					width={iconSize}
					height={iconSize}
					variant={pathname === '/' ? 'solid' : 'outline'}
				/>
			</Link>

			<Link href='/' className='lg:mt-8'>
				<SearchSvgIcon
					thickness={pathname === '/search' ? 'fat' : 'thin'}
					width={iconSize}
					height={iconSize}
					className='w-6 h-6'
				/>
			</Link>

			<Link href='/' className='lg:mt-8'>
				<ExploreSvgIcon
					thickness={pathname === '/explore' ? 'fat' : 'thin'}
					width={iconSize}
					height={iconSize}
					className='w-6 h-6'
				/>
			</Link>

			<Link href='/' className='lg:mt-8'>
				<ReelSvgIcon
					thickness={pathname === '/reels' ? 'fat' : 'thin'}
					width={iconSize}
					height={iconSize}
				/>
			</Link>

			<Link href='/' className='lg:mt-8'>
				<PlusSvgIcon
					thickness={pathname === '/reels' ? 'fat' : 'thin'}
					width={iconSize}
					height={iconSize}
				/>
			</Link>

			<Link href='/' className='lg:mt-8'>
				<MessengerSvgIcon
					thickness={pathname === '/message' ? 'fat' : 'thin'}
					width={iconSize}
					height={iconSize}
				/>
			</Link>

			<Image
				src='/common/empty-avt.jpg'
				width={iconSize}
				height={iconSize}
				alt=''
				className='rounded-full lg:mt-8'
			/>

			<div className='hidden lg:flex flex-col items-center mt-auto'>
				<Link href='/' className='lg:mt-8'>
					<ThreadSvgIcon
						thickness={pathname === '/message' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
					/>
				</Link>

				<Link href='/' className='lg:mt-8'>
					<MenuSvgIcon
						thickness={pathname === '/message' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
					/>
				</Link>
			</div>
		</div>
	);
}
