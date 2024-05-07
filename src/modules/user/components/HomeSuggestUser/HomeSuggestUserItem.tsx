import { UserModel } from '@/modules/auth/apis/auth.api';
import AvatarSkeleton from '@/modules/common/components/skeleton/AvatarSkeleton';
import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import Image from 'next/image';

type HomeSuggestUserItemProps = {
	user: UserModel;
	suggestText: string;
	followText: string;
};

export default function HomeSuggestUserItem(props: HomeSuggestUserItemProps) {
	const { user, followText, suggestText } = props;
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

				<span className='text-text-secondary dark:text-text-secondaryDark text-sm first-letter:uppercase'>
					{suggestText}
				</span>
			</div>

			<InstaButton
				className='text-xs ml-auto flex-shrink-0 pr-0'
				variant='outline'
			>
				<span className='first-letter:uppercase'>{followText}</span>
			</InstaButton>
		</div>
	);
}

export const HomeSuggestUserItemSkeleton = () => {
	return (
		<div className='flex items-center h-[44px]'>
			<AvatarSkeleton className='' containerClassName='mr-3 w-[44px]' />

			<BoxSkeleton containerClassName='h-4/5' />
		</div>
	);
};
