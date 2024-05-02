import React from 'react';
import {
	MapThicknessToIconStrokeWidth,
	SvgIconProps,
} from '../../constants/svg-icon.constant';

type MenuSvgIconProps = React.JSX.IntrinsicElements['svg'] &
	SvgIconProps & {
		variant?: 'outline' | 'solid';
	};

export default function MenuSvgIcon(props: MenuSvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;

	return (
		<svg
			aria-label='Cài đặt'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={height}
			width={width}
			{...rest}
		>
			<title>Cài đặt</title>
			<line
				fill='none'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				x1='3'
				x2='21'
				y1='4'
				y2='4'
			></line>
			<line
				fill='none'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				x1='3'
				x2='21'
				y1='12'
				y2='12'
			></line>
			<line
				fill='none'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				x1='3'
				x2='21'
				y1='20'
				y2='20'
			></line>
		</svg>
	);
}
