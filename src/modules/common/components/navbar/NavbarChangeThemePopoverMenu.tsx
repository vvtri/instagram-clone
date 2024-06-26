'use client';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import { useChangeTheme } from '@/modules/user/hooks/use-change-theme.hook';
import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useCallback, useState, useTransition } from 'react';
import ReactSwitch from 'react-switch';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hook';
import { setShowNavbarChangeThemePopoverMenu } from '../../slices/navbar.slice';
import CaretSvgIcon from '../icon/svg-icon/CaretSvgIcon';
import ThemeSvgIcon from '../icon/svg-icon/ThemeSvgIcon';

const getThemeCheck = (theme: string) => {
  if (theme === 'dark') return true;
  else return false;
};

export default function NavbarChangeThemePopoverMenu() {
  const isShow = useAppSelector(
    ({ navbar }) => navbar.showNavbarChangeThemePopoverMenu,
  );
  const t = useTranslations('Client');
  const [_, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const { resolvedTheme, setTheme } = useTheme();
  const { user } = useAuth();
  const [themeChecked, setThemeChecked] = useState(() =>
    getThemeCheck(resolvedTheme!),
  );
  const { mutate, isPending } = useChangeTheme<{ theme: string }>({
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
      className={cn('w-full p-2 hidden rounded-lg bg-bg-hightLight', {
        block: isShow,
      })}
    >
      <div className="flex text-base items-center pr-2 pt-2 py-3">
        <div
          className="py-2 px-3 flex items-center justify-center"
          onClick={() => dispatch(setShowNavbarChangeThemePopoverMenu(false))}
        >
          <CaretSvgIcon
            width={12}
            height={12}
            className="-rotate-[90deg] text-text-secondary cursor-pointer"
          />
        </div>

        <p className="font-semibold first-letter:uppercase">
          {t('common.navbar.switchAppearance')}
        </p>
        <ThemeSvgIcon width={18} height={18} className="ml-auto" />
      </div>

      <div className="bg-bg-banner w-full h-[1px]" aria-hidden />

      <div className="flex items-center pt-6 pb-4 px-2 first-letter:uppercase">
        <p className="first-letter:uppercase">{t('common.navbar.darkMode')}</p>

        <ReactSwitch
          disabled={isPending}
          onChange={handleChangeTheme}
          checked={themeChecked}
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#d0d4d8"
          onColor="#fff"
          offHandleColor="#f2f2f2"
          onHandleColor="#000"
          className="ml-auto pr-2"
        />
      </div>
    </div>
  );
}
