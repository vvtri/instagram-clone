import React from 'react';
import Image from 'next/image';
import { cn } from '@/utilities/tailwind/cn';

type ImageWithGradientBorderProps = {
	imageUrl: string;
	length: number;
	className?: string;
};

export default function ImageWithGradientBorder(
	props: ImageWithGradientBorderProps
) {
	const { imageUrl, className, length } = props;
	const containerLength = length + 10;

	return (
		<div
			className={cn(
				`aspect-square relative rounded-full overflow-hidden flex items-center justify-center`,
				className
			)}
			style={{ width: containerLength }}
		>
			<div
				aria-hidden
				className='absolute inset-0 -z-10 bg-[linear-gradient(to_right_top,#FFF1BD,#D921CC)] rounded-full'
			/>

			<Image
				src={imageUrl}
				width={length}
				height={length}
				alt='UserStory Image'
				className='rounded-full outline-[3px] outline-white outline dark:outline-black'
			/>
		</div>
	);
}