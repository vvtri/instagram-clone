import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import React from 'react';

type CommentProps = {
	isPreview?: boolean;
};

export default function Comment(props: CommentProps) {
	const { isPreview = false } = props;

	return (
		<div className=''>
			<div className='flex space-x-1 items-center'>
				<p className='text-sm font-semibold'>lf.low.g</p>
				<VerifySvgIcon />
				<p className='text-sm'>HDBC 2024</p>
			</div>
		</div>
	);
}
