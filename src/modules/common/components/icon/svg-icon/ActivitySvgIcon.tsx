import { SvgIconProps } from '@/modules/common/types/svg-icon.type';
import React from 'react';

export default function ActivitySvgIcon(props: SvgIconProps) {
	const {
		thickness = 'thin',
		variant = 'outline',
		width = 24,
		height = 24,
		...rest
	} = props;

	return (
		<svg
			aria-label='Hoạt động của bạn'
			fill='currentColor'
			role='img'
			viewBox='0 0 24 24'
			height={width}
			width={height}
			{...rest}
		>
			<title>Hoạt động của bạn</title>
			<path d='M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z'></path>
		</svg>
	);
}
