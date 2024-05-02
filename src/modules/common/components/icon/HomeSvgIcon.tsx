import React from 'react';
import {
	MapThicknessToIconStrokeWidth,
	SvgIconProps,
} from '../../constants/svg-icon.constant';

type HomeSvgIconProps = React.JSX.IntrinsicElements['svg'] &
	SvgIconProps & {
		variant?: 'outline' | 'solid';
	};

export default function HomeSvgIcon(props: HomeSvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;


	return (
		<svg
			aria-label='Trang chủ'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={height}
			width={width}
			{...rest}
		>
			<title>Trang chủ</title>
			<path
				d='M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z'
				fill={variant === 'outline' ? 'none' : 'currentColor'}
				stroke='currentColor'
				stroke-linejoin='round'
				stroke-width={MapThicknessToIconStrokeWidth[thickness]}
			></path>
		</svg>
	);
}
