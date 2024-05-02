import React from 'react';
import {
	MapThicknessToIconStrokeWidth,
	SvgIconProps,
} from '../../constants/svg-icon.constant';

type ExploreSvgIconProps = React.JSX.IntrinsicElements['svg'] &
	SvgIconProps & {
		variant?: 'outline' | 'solid';
	};

export default function ExploreSvgIcon(props: ExploreSvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;

	return (
		<svg
			aria-label='Khám phá'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={height}
			width={width}
			{...rest}
		>
			<title>Khám phá</title>
			<polygon
				fill='none'
				points='13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
			></polygon>
			<polygon
				fill-rule='evenodd'
				points='10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056'
			></polygon>
			<circle
				cx='12.001'
				cy='12.005'
				fill='none'
				r='10.5'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
			></circle>
		</svg>
	);
}
