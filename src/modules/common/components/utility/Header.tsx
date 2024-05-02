import Link from 'next/link';
import HeartSvgIcon from '../icon/HeartSvgIcon';
import InstaSvgLogo from '../icon/InstagramLogoTextSvgIcon';
import SearchInput from './SearchInput';
import PlusSvgIcon from '../icon/PlusSvgIcon';

export default function Header() {
	return (
		<header className='h-16 sticky top-0 inset-x-0 w-full flex justify-between items-center px-4 border-b border-separator z-50 bg-white overflow-visible sm:tracking-wide dark:bg-black dark:text-white dark:border-elevatedSeparator lg:hidden'>
			<Link href='/'>
				<InstaSvgLogo />
			</Link>

			<div className='flex items-center'>
				<div className='pr-2 mr-3 w-[268px] h-[36px] hidden sm:block'>
					<SearchInput />
				</div>

				<div className='px-3  cursor-pointer sm:hidden'>
					<PlusSvgIcon />
				</div>

				<Link href='/notifications'>
					<HeartSvgIcon />
				</Link>
			</div>
		</header>
	);
}