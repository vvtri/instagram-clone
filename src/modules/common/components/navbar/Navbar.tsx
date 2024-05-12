'use client';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import ChangeLanguageModal from '@/modules/user/components/ChangeLanguage/ChangeLanguageModal';
import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import { getUserProfileLink } from '../../helpers/link.helper';
import { useAppDispatch } from '../../hooks/store.hook';
import { useClickOutSide } from '../../hooks/use-click-out-side.hook';
import { useToast } from '../../hooks/use-toast.hook';
import {
  hideNavbarMorePopoverMenu,
  toggleShowNavbarMorePopoverMenu,
} from '../../slices/navbar.slice';
import ExploreSvgIcon from '../icon/svg-icon/ExploreSvgIcon';
import HeartSvgIcon from '../icon/svg-icon/HeartSvgIcon';
import HomeSvgIcon from '../icon/svg-icon/HomeSvgIcon';
import InstagramLogoSvgIcon from '../icon/svg-icon/InstagramLogoSvgIcon';
import InstaSvgLogo from '../icon/svg-icon/InstagramLogoTextSvgIcon';
import MenuSvgIcon from '../icon/svg-icon/MenuSvgIcon';
import MessengerSvgIcon from '../icon/svg-icon/MessengerSvgIcon';
import PlusInBoxSvgIcon from '../icon/svg-icon/PlusInBoxSvgIcon';
import ReelSvgIcon from '../icon/svg-icon/ReelSvgIcon';
import SearchSvgIcon from '../icon/svg-icon/SearchSvgIcon';
import ThreadSvgIcon from '../icon/svg-icon/ThreadSvgIcon';
import NavbarItem from './NavbarItem';
import NavbarMorePopoverMenu from './NavbarMorePopoverMenu';

export const NAVBAR_ICON_SIZE = 24;

export default function Navbar() {
  const t = useTranslations('Client');
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const { warning } = useToast();

  const dispatch = useAppDispatch();
  const navbarMoreRef = useRef<HTMLDivElement | null>(null);

  useClickOutSide(navbarMoreRef, () => {
    dispatch(hideNavbarMorePopoverMenu());
  });

  return (
    <div className="z-navbar flex items-center justify-around w-full h-12 bg-bg-primary text-text-primary fixed bottom-0 inset-x-0 border-t border-separator lg:border-t-0 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[72px] lg:flex-col lg:border-r lg:border-separator lg:h-full lg:justify-start lg:py-3 lg:pb-12 xl:w-[244px] xl:px-3 xl:pt-2 xl:pb-5 xl:items-start">
      <ChangeLanguageModal />

      <Link href="/" className="hidden px-3 pb-4 lg:block lg:pt-6 lg:mb-6">
        <InstaSvgLogo className="hidden xl:block" />

        <InstagramLogoSvgIcon className="hidden lg:block xl:hidden" />
      </Link>

      <NavbarItem
        icon={HomeSvgIcon}
        label={t('common.navbar.home')}
        highlight={pathname === '/'}
        onClick={() => router.push('/')}
        iconProps={{
          thickness: pathname === '/' ? 'extraThin' : 'thin',
          variant: pathname === '/' ? 'solid' : 'outline',
        }}
      />

      <NavbarItem
        icon={SearchSvgIcon}
        label={t('common.navbar.search')}
        highlight={pathname === '/search'}
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
          // router.push('/search');
        }}
      />

      <NavbarItem
        icon={ExploreSvgIcon}
        label={t('common.navbar.explore')}
        highlight={pathname === '/explore'}
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
          // router.push('/explore');
        }}
        className="hidden lg:block"
      />

      <NavbarItem
        icon={ReelSvgIcon}
        label={t('common.navbar.reel')}
        highlight={pathname === '/reels'}
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
          // router.push('/reels');
        }}
      />

      <NavbarItem
        icon={PlusInBoxSvgIcon}
        label={t('common.navbar.create')}
        className="hidden lg:block"
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
        }}
      />

      <NavbarItem
        icon={MessengerSvgIcon}
        label={t('common.navbar.message')}
        highlight={pathname === '/message'}
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
          // router.push('/message');
        }}
      />

      <NavbarItem
        icon={HeartSvgIcon}
        label={t('common.navbar.notification')}
        highlight={pathname === '/message'}
        onClick={() => {
          warning(t('common.error.functionIsNotImplemented'));
          // router.push('/message');
        }}
        className="hidden lg:block"
      />

      <NavbarItem
        iconNode={
          <Image
            src={user.avt}
            width={NAVBAR_ICON_SIZE}
            height={NAVBAR_ICON_SIZE}
            alt=""
            className={cn('rounded-full', {
              'outline-2 outline outline-text-primary':
                pathname === getUserProfileLink(user.username),
            })}
          />
        }
        label={t('common.navbar.profile')}
        onClick={() => router.push(getUserProfileLink(user.username))}
        highlight={pathname === getUserProfileLink(user.username)}
      />

      <div className="hidden w-full lg:flex flex-col items-center mt-auto">
        <NavbarItem
          icon={ThreadSvgIcon}
          label={t('common.navbar.thread')}
          highlight={pathname === '/threads'}
          onClick={() => {
            warning(t('common.error.functionIsNotImplemented'));
            // router.push('/threads');
          }}
        />

        <NavbarItem
          icon={MenuSvgIcon}
          label={t('common.navbar.more')}
          popupOverNode={<NavbarMorePopoverMenu />}
          ref={navbarMoreRef}
          onClick={() => dispatch(toggleShowNavbarMorePopoverMenu())}
        />
      </div>
    </div>
  );
}
