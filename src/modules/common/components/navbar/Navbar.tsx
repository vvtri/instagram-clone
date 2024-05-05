'use client';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useAppDispatch } from '../../hooks/store.hook';
import { useClickOutSide } from '../../hooks/use-click-out-side.hook';
import {
	hideNavbarMorePopoverMenu,
	toggleShowNavbarMorePopoverMenu,
} from '../../slices/navbar.slice';
import ExploreSvgIcon from '../icon/svg-icon/ExploreSvgIcon';
import HomeSvgIcon from '../icon/svg-icon/HomeSvgIcon';
import InstagramLogoSvgIcon from '../icon/svg-icon/InstagramLogoSvgIcon';
import InstaSvgLogo from '../icon/svg-icon/InstagramLogoTextSvgIcon';
import MenuSvgIcon from '../icon/svg-icon/MenuSvgIcon';
import MessengerSvgIcon from '../icon/svg-icon/MessengerSvgIcon';
import PlusSvgIcon from '../icon/svg-icon/PlusSvgIcon';
import ReelSvgIcon from '../icon/svg-icon/ReelSvgIcon';
import SearchSvgIcon from '../icon/svg-icon/SearchSvgIcon';
import ThreadSvgIcon from '../icon/svg-icon/ThreadSvgIcon';
import NavbarItem from './NavbarItem';
import NavbarMorePopoverMenu from './NavbarMorePopoverMenu';
import HeartSvgIcon from '../icon/svg-icon/HeartSvgIcon';

export const NAVBAR_ICON_SIZE = 24;

export default function Navbar() {
	const pathname = usePathname();
	const { user } = useAuth();
	const router = useRouter();

	const dispatch = useAppDispatch();
	const navbarMoreRef = useRef<HTMLDivElement | null>(null);

	useClickOutSide(navbarMoreRef, () => {
		dispatch(hideNavbarMorePopoverMenu());
	});

	return (
		<div className='flex items-center justify-around w-full h-12 bg-white text-text-primary fixed bottom-0 inset-x-0 dark:bg-black dark:text-text-primaryDark lg:fixed lg:inset-y-0 lg:left-0 lg:w-[72px] lg:flex-col lg:border-r lg:border-separator lg:dark:border-elevatedSeparator lg:h-full lg:justify-start lg:py-3 lg:pb-12 xl:w-[244px] xl:px-3 xl:pt-2 xl:pb-5 xl:items-start'>
			<Link href='/' className='hidden px-3 pb-4 lg:block lg:pt-6'>
				<InstaSvgLogo className='hidden xl:block' />

				<InstagramLogoSvgIcon className='hidden lg:block xl:hidden' />
			</Link>

			<NavbarItem
				icon={HomeSvgIcon}
				label={'Trang chủ'}
				highlight={pathname === '/'}
				onClick={() => router.push('/')}
				iconProps={{
					thickness: 'extraThin',
					variant: pathname === '/' ? 'solid' : 'outline',
				}}
			/>

			<NavbarItem
				icon={SearchSvgIcon}
				label={'Tìm kiếm'}
				highlight={pathname === '/search'}
				onClick={() => router.push('/search')}
			/>

			<NavbarItem
				icon={ExploreSvgIcon}
				label={'Khám phá'}
				highlight={pathname === '/explore'}
				onClick={() => router.push('/explore')}
				className='hidden lg:block'
			/>

			<NavbarItem
				icon={ReelSvgIcon}
				label={'Reels'}
				highlight={pathname === '/reels'}
				onClick={() => router.push('/reels')}
			/>

			<NavbarItem
				icon={PlusSvgIcon}
				label={'Tạo'}
				className='hidden sm:block'
			/>

			<NavbarItem
				icon={MessengerSvgIcon}
				label={'Tin nhắn'}
				highlight={pathname === '/message'}
				onClick={() => router.push('/message')}
			/>

			<NavbarItem
				icon={HeartSvgIcon}
				label={'Thông báo'}
				highlight={pathname === '/message'}
				onClick={() => router.push('/message')}
			/>

			<NavbarItem
				iconNode={
					<Image
						src='/common/empty-avt.jpg'
						width={NAVBAR_ICON_SIZE}
						height={NAVBAR_ICON_SIZE}
						alt=''
						className='rounded-full'
					/>
				}
				label={'Trang cá nhân'}
			/>

			<div className='hidden w-full lg:flex flex-col items-center mt-auto'>
				<NavbarItem
					icon={ThreadSvgIcon}
					label={'Threads'}
					highlight={pathname === '/threads'}
					onClick={() => router.push('/threads')}
				/>

				<NavbarItem
					icon={MenuSvgIcon}
					label={'Xem thêm'}
					popupOverNode={<NavbarMorePopoverMenu />}
					ref={navbarMoreRef}
					onClick={() => dispatch(toggleShowNavbarMorePopoverMenu())}
				/>
			</div>
		</div>
	);
}
