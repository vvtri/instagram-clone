import Link from 'next/link';
import InstaSvgLogo from '../icon/svg-icon/InstagramLogoTextSvgIcon';
import SearchInput from './SearchInput';
import HeartSvgIcon from '../icon/svg-icon/HeartSvgIcon';
import PlusInBoxSvgIcon from '../icon/svg-icon/PlusInBoxSvgIcon';

export default function Header() {
	return (
		<header className='h-16 sticky top-0 inset-x-0 w-full flex justify-between items-center px-4 border-b border-separator z-50 bg-bg-primary text-text-primary overflow-visible sm:tracking-wide dark:border-separatorDark lg:hidden'>
			<Link href='/'>
				<InstaSvgLogo />
			</Link>

			<div className='flex items-center'>
				<div className='pr-2 mr-3 w-[268px] h-[36px] hidden sm:block'>
					<SearchInput />
				</div>

				<div className='px-3  cursor-pointer sm:hidden'>
					<PlusInBoxSvgIcon />
				</div>

				<Link href='/notifications'>
					<HeartSvgIcon className='hover:scale-110 transition' />
				</Link>
			</div>
		</header>
	);
}
