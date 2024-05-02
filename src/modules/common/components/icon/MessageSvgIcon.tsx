import React from 'react';
import {
	MapThicknessToIconStrokeWidth,
	SvgIconProps,
} from '../../constants/svg-icon.constant';

type MessageIconProps = React.JSX.IntrinsicElements['svg'] & SvgIconProps;

export default function MessageSvgIcon(props: MessageIconProps) {
	const { thickness = 'thin', width = 24, height = 24, ...rest } = props;


	return (
		<svg
			aria-label='Bình luận'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			width={width}
			height={height}
			{...rest}
		>
			<title>Bình luận</title>
			<path
				d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
				fill='none'
				stroke='currentColor'
				stroke-linejoin='round'
				stroke-width={MapThicknessToIconStrokeWidth[thickness]}
			></path>
		</svg>
	);
}
