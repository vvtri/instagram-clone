import { SvgIconProps } from '@/modules/common/types/svg-icon.type';
import React from 'react';

export default function CloseSvgIcon(props: SvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;

	return (
		<svg
			aria-label='Close'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={width}
			width={height}
			{...rest}
		>
			<title>Close</title>
			<polyline
				fill='none'
				points='20.643 3.357 12 12 3.353 20.647'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='3'
			></polyline>
			<line
				fill='none'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='3'
				x1='20.649'
				x2='3.354'
				y1='20.649'
				y2='3.354'
			></line>
		</svg>
	);
}
