import { cn } from '@/utilities/tailwind/cn';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hook';
import { setShowNavbarChangeThemePopoverMenu } from '../../slices/navbar.slice';
import BackSvgIcon from '../icon/svg-icon/CaretSvgIcon';
import ThemeSvgIcon from '../icon/svg-icon/ThemeSvgIcon';
import ReactSwitch from 'react-switch';
import { useTheme } from 'next-themes';
import { useChangeTheme } from '@/modules/user/hooks/use-change-theme.hook';
import { useCookies } from 'next-client-cookies';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { useCallback, useState, useTransition } from 'react';

const getThemeCheck = (theme: string) => {
	if (theme === 'dark') return true;
	else return false;
};

export default function NavbarChangeThemePopoverMenu() {
	const isShow = useAppSelector(
		({ navbar }) => navbar.showNavbarChangeThemePopoverMenu
	);

	const [_, startTransition] = useTransition();
	const dispatch = useAppDispatch();
	const { resolvedTheme, setTheme } = useTheme();
	const { user } = useAuth();
	const [themeChecked, setThemeChecked] = useState(() =>
		getThemeCheck(resolvedTheme!)
	);
	const { mutate, isLoading } = useChangeTheme<{ theme: string }>({
		onMutate: (params) => {
			setThemeChecked(getThemeCheck(params.theme));
			startTransition(() => setTheme(params.theme));
			return { theme: params.theme };
		},
		onSuccess: (res) => {},
		onError: (error, params, context) => {
			setThemeChecked(getThemeCheck(context!.theme));
			startTransition(() => setTheme(context!.theme));
		},
	});

	const handleChangeTheme = useCallback((checked: boolean) => {
		mutate({
			token: user.id.toString(),
			theme: checked ? 'dark' : 'light',
		});
	}, []);

	return (
		<div
			className={cn(
				'w-full p-2 hidden rounded-lg bg-bg-hightLight dark:bg-bg-highLightDark',
				{ block: isShow }
			)}
		>
			<div className='flex text-base items-center px-2 pt-3 py-4'>
				<BackSvgIcon
					width={12}
					height={12}
					className='mr-3 -rotate-[90deg] text-text-secondary dark:text-text-secondaryDark cursor-pointer'
					onClick={() => dispatch(setShowNavbarChangeThemePopoverMenu(false))}
				/>
				<p className='font-semibold'>Chuyển chế độ</p>
				<ThemeSvgIcon width={18} height={18} className='ml-auto' />
			</div>

			<div
				className='bg-text-secondary dark:bg-bg-hoverOverlayDark w-full h-[1px]'
				aria-hidden
			/>

			<div className='flex items-center pt-6 pb-4 px-2'>
				<p className=''>Chế độ tối</p>

				<ReactSwitch
					disabled={isLoading}
					onChange={handleChangeTheme}
					checked={themeChecked}
					height={16}
					width={30}
					checkedIcon={false}
					uncheckedIcon={false}
					offColor='#d0d4d8'
					onColor='#fff'
					offHandleColor='#f2f2f2'
					onHandleColor='#000'
					className='ml-auto pr-2'
				/>
			</div>
		</div>
	);
}