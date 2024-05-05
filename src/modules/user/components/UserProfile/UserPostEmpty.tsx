import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import React from 'react';

export default function UserPostEmpty() {
	return (
		<div className='w-[350px] mx-auto flex flex-col items-center mt-8'>
			<InstaImgIcon
				backgroundPosition='-63px -288px'
				url='https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png'
				backgroundSize='440px 411px'
				width={62}
				height={62}
			/>

			<h2 className='font-extrabold text-3xl tracking-wide mt-6'>Chia sẻ ảnh</h2>
			<p className='text-sm mt-5 mb-6'>
				Khi bạn chia sẽ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.
			</p>

			<InstaButton variant='outline'>Chia sẻ ảnh đầu tiên của bạn</InstaButton>
		</div>
	);
}
