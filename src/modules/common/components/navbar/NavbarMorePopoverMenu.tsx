import { cn } from '@/utilities/tailwind/cn';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hook';
import { setShowNavbarChangeThemePopoverMenu } from '../../slices/navbar.slice';
import ActivitySvgIcon from '../icon/svg-icon/ActivitySvgIcon';
import BookmarkSvgIcon from '../icon/svg-icon/BookmarkSvgIcon';
import ProblemSvgIcon from '../icon/svg-icon/ProblemSvgIcon';
import SettingSvgIcon from '../icon/svg-icon/SettingSvgIcon';
import ThemeSvgIcon from '../icon/svg-icon/ThemeSvgIcon';
import NavbarChangeThemePopoverMenu from './NavbarChangeThemePopoverMenu';
import NavbarMorePopoverMenuItem from './NavbarMorePopoverMenuItem';

type NavbarMorePopoverMenuProps = {};

export default function NavbarMorePopoverMenu({}: NavbarMorePopoverMenuProps) {
	const { showNavbarMorePopoverMenu, showNavbarChangeThemePopoverMenu } =
		useAppSelector(({ navbar }) => navbar);
	const dispatch = useAppDispatch();

	return (
		<div
			className={cn(
				'hidden absolute bottom-[calc(100%_+_10px)] left-0 w-[266px] bg-white dark:bg-bg-highLightDark text-base rounded-lg shadow-container',
				{ block: showNavbarMorePopoverMenu }
			)}
			onClick={(e) => e.stopPropagation()}
		>
			<NavbarChangeThemePopoverMenu />

			<div
				className={cn('w-full', { hidden: showNavbarChangeThemePopoverMenu })}
			>
				<ul className='w-full p-2'>
					<NavbarMorePopoverMenuItem icon={SettingSvgIcon} label='Cài đặt' />
					<NavbarMorePopoverMenuItem
						icon={ActivitySvgIcon}
						label='Hoạt động của bạn'
					/>
					<NavbarMorePopoverMenuItem icon={BookmarkSvgIcon} label='Đã lưu' />
					<NavbarMorePopoverMenuItem
						icon={ThemeSvgIcon}
						label='Chuyển chế độ'
						onClick={() => dispatch(setShowNavbarChangeThemePopoverMenu(true))}
					/>
					<NavbarMorePopoverMenuItem
						icon={ProblemSvgIcon}
						label='Báo cáo sự cố'
					/>
				</ul>

				<div
					aria-hidden
					className='w-full h-1 bg-bg-hightLight dark:bg-bg-hoverOverlayDark'
				/>

				<ul className='w-full p-2'>
					<NavbarMorePopoverMenuItem label='Chuyển tài khoản' />
					<NavbarMorePopoverMenuItem label='Đăng xuất' />
				</ul>
			</div>
		</div>
	);
}
