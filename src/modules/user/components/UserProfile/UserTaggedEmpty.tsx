import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import React from 'react';

export default function UserTaggedEmpty() {
	return (
		<div className='w-[350px] mx-auto flex flex-col items-center mt-8'>
			<InstaImgIcon
				backgroundPosition='-189px -288px'
				url='https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png'
				backgroundSize='440px 411px'
				width={62}
				height={62}
			/>

			<h2 className='font-extrabold text-3xl tracking-wide mt-6'>
				Ảnh có mặt bạn
			</h2>
			<p className='text-sm mt-5 mb-6'>
				Khi mọi người gắn thẻ bạn trong ảnh, ảnh sẽ xuất hiện tại đây.
			</p>
		</div>
	);
}
