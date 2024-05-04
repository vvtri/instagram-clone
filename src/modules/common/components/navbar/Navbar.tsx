'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ExploreSvgIcon from '../icon/ExploreSvgIcon';
import HomeSvgIcon from '../icon/HomeSvgIcon';
import InstagramLogoSvgIcon from '../icon/InstagramLogoSvgIcon';
import InstaSvgLogo from '../icon/InstagramLogoTextSvgIcon';
import MenuSvgIcon from '../icon/MenuSvgIcon';
import MessengerSvgIcon from '../icon/MessengerSvgIcon';
import PlusSvgIcon from '../icon/PlusSvgIcon';
import ReelSvgIcon from '../icon/ReelSvgIcon';
import SearchSvgIcon from '../icon/SearchSvgIcon';
import ThreadSvgIcon from '../icon/ThreadSvgIcon';
import NavbarItem from './NavbarItem';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';

export default function Navbar() {
	const pathname = usePathname();
	const { user } = useAuth();
	const iconSize = 24;

	return (
		<div className='flex items-center justify-around w-full h-12 bg-white fixed bottom-0 inset-x-0 dark:bg-black text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-[72px] lg:flex-col lg:border-r lg:border-separator lg:dark:border-elevatedSeparator lg:h-full lg:justify-start lg:py-3 lg:pb-12 xl:w-[244px] xl:px-3 xl:pt-2 xl:pb-5 xl:items-start'>
			<Link href='/' className='hidden px-3 pb-4 lg:block lg:pt-6'>
				<InstaSvgLogo className='hidden xl:block' />

				<InstagramLogoSvgIcon className='hidden lg:block xl:hidden' />
			</Link>

			<NavbarItem
				href='/'
				icon={
					<HomeSvgIcon
						width={iconSize}
						height={iconSize}
						variant={pathname === '/' ? 'solid' : 'outline'}
					/>
				}
				label={'Trang chủ'}
				highlight={pathname === '/'}
			/>

			<NavbarItem
				href='/search'
				icon={
					<SearchSvgIcon
						thickness={pathname === '/search' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
						className='w-6 h-6'
					/>
				}
				label={'Tìm kiếm'}
				highlight={pathname === '/search'}
			/>

			<NavbarItem
				href='/explore'
				icon={
					<ExploreSvgIcon
						thickness={pathname === '/explore' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
						className='w-6 h-6'
					/>
				}
				label={'Khám phá'}
				highlight={pathname === '/explore'}
			/>

			<NavbarItem
				href='/reels'
				icon={
					<ReelSvgIcon
						thickness={pathname === '/reels' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
					/>
				}
				label={'Reels'}
				highlight={pathname === '/reels'}
			/>

			{/* todo: button */}
			<NavbarItem
				href='/'
				icon={
					<PlusSvgIcon
						thickness={pathname === '/' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
					/>
				}
				label={'Tạo'}
			/>

			<NavbarItem
				href='/message'
				icon={
					<MessengerSvgIcon
						thickness={pathname === '/message' ? 'fat' : 'thin'}
						width={iconSize}
						height={iconSize}
					/>
				}
				label={'Tin nhắn'}
				highlight={pathname === '/message'}
			/>

			<NavbarItem
				href={user?.username}
				icon={
					<Image
						src='/common/empty-avt.jpg'
						width={iconSize}
						height={iconSize}
						alt=''
						className='rounded-full'
					/>
				}
				label={'Trang cá nhân'}
			/>

			<div className='hidden w-full lg:flex flex-col items-center mt-auto'>
				<NavbarItem
					href='/thread'
					icon={
						<ThreadSvgIcon
							thickness={pathname === '/thread' ? 'fat' : 'thin'}
							width={iconSize}
							height={iconSize}
						/>
					}
					label={'Threads'}
				/>

				<NavbarItem
					href='/message'
					icon={
						<MenuSvgIcon
							thickness={pathname === '/message' ? 'fat' : 'thin'}
							width={iconSize}
							height={iconSize}
						/>
					}
					label={'Xem thêm'}
				/>
			</div>
		</div>
	);
}
