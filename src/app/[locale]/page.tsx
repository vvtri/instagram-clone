import ScreenshotBox from '@/modules/auth/components/ScreenshotBox';
import SignInBox from '@/modules/auth/components/sign-in/SignInBox';
import Image from 'next/image';

export default function RootPage() {
	return (
		<main className='pt-12 mx-auto'>
			<div className='flex items-center justify-center'>
				<ScreenshotBox className='hidden lg:block' />

				<SignInBox className='flex items-center flex-col' />
			</div>
		</main>
	);
}
