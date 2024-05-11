'use client';
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
import { useTranslations } from 'next-intl';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { useToast } from '../../hooks/use-toast.hook';

type NavbarMorePopoverMenuProps = {};

export default function NavbarMorePopoverMenu({}: NavbarMorePopoverMenuProps) {
	const { showNavbarMorePopoverMenu, showNavbarChangeThemePopoverMenu } =
		useAppSelector(({ navbar }) => navbar);
	const dispatch = useAppDispatch();
	const t = useTranslations('Client');
	const { signOut } = useAuth();
	const { warning } = useToast();

	return (
		<div
			className={cn(
				'hidden absolute bottom-[calc(100%_+_10px)] left-0 w-[266px] bg-bg-hightLight text-base rounded-lg shadow-container',
				{ block: showNavbarMorePopoverMenu }
			)}
			onClick={(e) => e.stopPropagation()}
		>
			<NavbarChangeThemePopoverMenu />

			<div
				className={cn('w-full', { hidden: showNavbarChangeThemePopoverMenu })}
			>
				<ul className='w-full p-2'>
					<NavbarMorePopoverMenuItem
						icon={SettingSvgIcon}
						label={t('common.navbar.settings')}
						onClick={() => warning(t('common.error.functionIsNotImplemented'))}
					/>
					<NavbarMorePopoverMenuItem
						icon={ActivitySvgIcon}
						label={t('common.navbar.yourActivity')}
						onClick={() => warning(t('common.error.functionIsNotImplemented'))}
					/>
					<NavbarMorePopoverMenuItem
						icon={BookmarkSvgIcon}
						label={t('common.navbar.saved')}
						onClick={() => warning(t('common.error.functionIsNotImplemented'))}
					/>
					<NavbarMorePopoverMenuItem
						icon={ThemeSvgIcon}
						label={t('common.navbar.switchAppearance')}
						onClick={() => dispatch(setShowNavbarChangeThemePopoverMenu(true))}
					/>
					<NavbarMorePopoverMenuItem
						icon={ProblemSvgIcon}
						label={t('common.navbar.reportAProblem')}
						onClick={() => warning(t('common.error.functionIsNotImplemented'))}
					/>
				</ul>

				<div aria-hidden className='w-full h-1 bg-bg-hightLight' />

				<ul className='w-full p-2'>
					<NavbarMorePopoverMenuItem
						label={t('common.navbar.switchAccounts')}
						onClick={() => warning(t('common.error.functionIsNotImplemented'))}
					/>
					<NavbarMorePopoverMenuItem
						label={t('common.navbar.logout')}
						onClick={signOut}
					/>
				</ul>
			</div>
		</div>
	);
}
