import CaretSvgIcon from '@/modules/common/components/icon/svg-icon/CaretSvgIcon';
import SettingSvgIcon from '@/modules/common/components/icon/svg-icon/SettingSvgIcon';
import ThreadSvgIcon from '@/modules/common/components/icon/svg-icon/ThreadSvgIcon';

type UserProfileHeaderProps = {
	username: string;
};

export default function UserProfileHeader({
	username,
}: UserProfileHeaderProps) {
	return (
		<div className='flex sticky top-0 w-full px-4 items-center justify-between py-2 border-b border-separator lg:hidden'>
			<SettingSvgIcon width={24} height={24} className='cursor-pointer' />

			<div className='flex items-center'>
				<p className='text-sm font-semibold mr-1'>{username}</p>
				<CaretSvgIcon
					width={12}
					height={12}
					className='rotate-180 cursor-pointer'
				/>
			</div>

			<ThreadSvgIcon width={24} height={24} className='cursor-pointer' />
		</div>
	);
}
