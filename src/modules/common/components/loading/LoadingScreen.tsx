import Image from 'next/image';
import React from 'react';

export default function LoadingScreen() {
	return (
		<main className='w-screen h-screen flex justify-center items-center flex-col fixed inset-0 z-10 bg-white'>
			<Image
				width='80'
				height='80'
				src='/loading/auth-loading-icon-logo.png'
				className=''
				alt='Loading icon'
				priority
			/>

			<Image
				width='72'
				height='37'
				src='/loading/auth-loading-icon-meta.png'
				className='absolute bottom-8 left-1/2 -translate-x-1/2'
				alt='Loading icon'
				priority
			/>
		</main>
	);
}
