import { SvgIconProps } from '@/modules/common/types/svg-icon.type';
import React from 'react';

export default function CaretSvgIcon(props: SvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;

	return (
		<svg
			aria-label='Quay lại'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={height}
			width={width}
			{...rest}
		>
			<title>Quay lại</title>
			<path d='M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z'></path>
		</svg>
	);
}
