import { UserModel } from '@/modules/auth/apis/auth.api';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import Image from 'next/image';
import React from 'react';

type HomeSuggestUserItemProps = {
	user: UserModel;
};

export default function HomeSuggestUserItem({
	user,
}: HomeSuggestUserItemProps) {
	return (
		<div className='flex items-center'>
			<Image
				src={user.avt}
				height={44}
				width={44}
				className='rounded-full mr-3'
				alt='user avt'
			/>

			<div className='flex justify-center flex-col overflow-ellipsis'>
				<span className='text-sm text-black dark:text-white font-semibold'>
					{user.username}
				</span>

				<span className='text-text-secondary dark:text-text-secondaryDark text-sm'>
					Gợi ý cho bạn
				</span>
			</div>

			<InstaButton
				className='text-xs ml-auto flex-shrink-0 pr-0'
				variant='outline'
			>
				Theo dõi
			</InstaButton>
		</div>
	);
}
