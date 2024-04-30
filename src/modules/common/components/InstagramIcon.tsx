import { cn } from '@/utilities/tailwind/cn';
import React from 'react';

type InstagramIconProps = {
	url?: string;
	backgroundPosition: string;
	width?: number;
	height?: number;
	className?: string;
};

export default function InstaIcon(props: InstagramIconProps) {
	const {
		backgroundPosition,
		height = 16,
		url = 'https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png',
		width = 16,
		className,
	} = props;

	return (
		<div
			style={{
				backgroundImage: `url('${url}')`,
				width,
				height,
				backgroundPosition,
				backgroundRepeat: 'no-repeat',
			}}
			className={cn(className)}
		></div>
	);
}
