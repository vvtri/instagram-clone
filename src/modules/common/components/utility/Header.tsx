import Link from 'next/link';
import HeartSvgIcon from '../icon/svg-icon/HeartSvgIcon';
import InstaSvgLogo from '../icon/svg-icon/InstagramLogoTextSvgIcon';
import PlusInBoxSvgIcon from '../icon/svg-icon/PlusInBoxSvgIcon';
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <header className="h-16 sticky top-0 inset-x-0 w-full flex justify-between items-center px-4 border-b border-separator z-header bg-bg-primary text-text-primary overflow-visible sm:tracking-wide lg:hidden">
      <Link href="/">
        <InstaSvgLogo />
      </Link>

      <div className="flex items-center">
        <div className="pr-2 mr-3 w-[268px] h-[36px] hidden sm:block">
          <SearchInput />
        </div>

        <div className="px-3  cursor-pointer sm:hidden">
          <PlusInBoxSvgIcon />
        </div>

        <Link href="/notifications">
          <HeartSvgIcon className="hover:scale-110 transition" />
        </Link>
      </div>
    </header>
  );
}
