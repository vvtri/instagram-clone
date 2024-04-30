'use client';
import { cn } from '@/utilities/tailwind/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const screenshotSrcs = [
	'/home/not-login/screen-shot/screenshot1.png',
	'/home/not-login/screen-shot/screenshot2.png',
	'/home/not-login/screen-shot/screenshot3.png',
	'/home/not-login/screen-shot/screenshot4.png',
];

type ScreenshotBoxProps = {
	className?: string;
};

export default function ScreenshotBox({ className }: ScreenshotBoxProps) {
	const [currentImgIdx, setCurrentImgIdx] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImgIdx((prev) => {
				return (prev + 1) % screenshotSrcs.length;
			});
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div
			style={{
				backgroundImage: `url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk')`,
				backgroundPosition: '-46px 0',
			}}
			className={cn('relative h-[581.15px] basis-[380.32px] mr-8', className)}
		>
			{screenshotSrcs.map((item, idx) => (
				<Image
					key={item}
					src={item}
					alt=''
					width={250}
					height={541}
					className={cn(
						'absolute top-[25px] right-[20px] w-[250px] h-[541px] duration-[1.5s] opacity-0',
						{ 'opacity-100': idx === currentImgIdx }
					)}
				/>
			))}
		</div>
	);
}
