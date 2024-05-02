import React, { PropsWithChildren } from 'react';
import {
	MapThicknessToIconStrokeWidth,
	SvgIconProps,
} from '../../constants/svg-icon.constant';

type SearchIconProps = {
	width?: number;
	height?: number;
	className?: string;
} & SvgIconProps;

export default function SearchSvgIcon(props: SearchIconProps) {
	const { height = 16, width = 16, className, thickness = 'thin' } = props;

	return (
		<svg
			aria-label='Tìm kiếm'
			fill='currentColor'
			height={width}
			role='img'
			viewBox='0 0 24 24'
			width={height}
			className={className}
		>
			<title>Tìm kiếm</title>
			<path
				d='M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z'
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={MapThicknessToIconStrokeWidth[thickness]}
			></path>
			<line
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={MapThicknessToIconStrokeWidth[thickness]}
				x1='16.511'
				x2='22'
				y1='16.511'
				y2='22'
			></line>
		</svg>
	);
}
