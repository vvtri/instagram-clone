'client';

import React from 'react';
import CaretSvgIcon from '../icon/svg-icon/CaretSvgIcon';
import { useWithinPage } from '../../providers/OriginProvider';
import { useRouter } from 'next/navigation';

type MobilePageHeaderProps = {
	title: string;
	routeToBack?: string;
};

export default function MobilePageHeader(props: MobilePageHeaderProps) {
	const { title, routeToBack = '/' } = props;
	const router = useRouter();
	const isWithinPage = useWithinPage();

	const handleBack = () => {
		if (isWithinPage) router.back();
		else router.push(routeToBack);
	};

	return (
		<div className='relative flex items-center justify-center lg:hidden py-3 border-b border-separator'>
			<div className='absolute left-4 z-float p-2 ' onClick={handleBack}>
				<CaretSvgIcon className='-rotate-90' width={20} height={20} />
			</div>
			<h4 className='font-medium capitalize'>{title}</h4>
		</div>
	);
}
