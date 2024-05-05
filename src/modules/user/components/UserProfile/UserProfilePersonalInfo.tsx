'use client';
import React from 'react';
import { useUserProfileData } from '../../hooks/use-user-profile-data.hook';
import Image from 'next/image';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import PostSvgIcon from '@/modules/common/components/icon/svg-icon/PostSvgIcon';
import BookmarkSvgIcon from '@/modules/common/components/icon/svg-icon/BookmarkSvgIcon';
import TaggedSvgIcon from '@/modules/common/components/icon/svg-icon/TaggedSvgIcon';
import SettingSvgIcon from '@/modules/common/components/icon/svg-icon/SettingSvgIcon';
import UserProfilePersonalInfoStatistic from './UserProfilePersonalInfoStatistic';
import PlusSvgIcon from '@/modules/common/components/icon/svg-icon/PlusSvgIcon';
import { cn } from '@/utilities/tailwind/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { genImageSizesProp } from '@/modules/common/helpers/image.helper';

const USER_PROFILE_SECTIONS = [
	{
		labelI18nKey: 'Bài viết',
		getHref: (username: string) => `/${username}`,
		Icon: PostSvgIcon,
	},
	{
		labelI18nKey: 'Đã lưu',
		getHref: (username: string) => `/${username}/saved`,
		Icon: BookmarkSvgIcon,
	},
	{
		labelI18nKey: 'Được gắn thẻ',
		getHref: (username: string) => `/${username}/tagged`,
		Icon: TaggedSvgIcon,
	},
];

type UserProfilePersonalInfoProps = {
	username: string;
};

export default function UserProfilePersonalInfo({
	username,
}: UserProfilePersonalInfoProps) {
	const pathname = usePathname();
	const { data: user } = useUserProfileData({ username });
	if (!user) throw new Error('User data not found');

	return (
		<div className='p-4 lg:pt-8 lg:px5'>
			<div className='border-b pb-6 border-separator dark:border-separatorDark'>
				<div className='flex'>
					<div className='self-center mr-7 flex-shrink-0 lg:flex-grow-[1] flex items-center justify-center'>
						<div className='relative w-[77px] lg:w-[150px]  aspect-square rounded-full overflow-hidden'>
							<Image
								src={user.avt}
								fill
								alt=''
								sizes={genImageSizesProp({ default: '77px', lg: '150px' })}
							/>
						</div>
					</div>

					<div className='flex-grow lg:flex-grow-[2]'>
						<div className='flex flex-col justify-center items-start lg:flex-row lg:justify-start lg:items-center'>
							<p className='text-xl mb-4 lg:mb-0'>{username}</p>

							<div className='flex items-center lg:ml-6 text-sm'>
								<InstaButton className='mr-2' colorSchema='gray'>
									Chỉnh sửa trang cá nhân
								</InstaButton>
								<InstaButton colorSchema='gray'>Xem kho lưu trữ</InstaButton>
								<div className='hidden p-2 lg:block cursor-pointer'>
									<SettingSvgIcon />
								</div>
							</div>
						</div>

						<UserProfilePersonalInfoStatistic className='hidden justify-start gap-8 lg:flex' />

						<p className='hidden text-sm font-medium lg:block'>
							{user.fullName}
						</p>
					</div>
				</div>

				<p className='mt-5 font-medium text-sm lg:hidden'>{user.fullName}</p>

				<div className='hidden lg:flex ml-11 mt-10 w-fit items-center justify-center flex-col'>
					<div className='flex items-center justify-center w-[77px] h-[77px] border border-separator dark:border-separatorDark rounded-full cursor-pointer'>
						<PlusSvgIcon className='text-icon-tertiary dark:text-icon-tertiaryDark' />
					</div>

					<span className='text-xs mt-3'>Mới</span>
				</div>
			</div>

			<UserProfilePersonalInfoStatistic className='border-b border-separator dark:border-separatorDark lg:hidden' />

			<div className='flex items-center justify-around py-3 border-b border-separator dark:border-separatorDark gap-5 text-text-secondary dark:text-text-secondaryDark text-base lg:text-xs lg:font-semibold lg:tracking-wider lg:justify-center lg:gap-16 lg:border-b-0 lg:pt-0'>
				{USER_PROFILE_SECTIONS.map((item) => (
					<Link
						key={item.labelI18nKey}
						className={cn(
							'flex transition items-center py-3 cursor-pointer gap-2 lg:pt-6',
							{
								'text-btn-primary lg:text-text-primary dark:text-text-primaryDark lg:border-t border-text-primary  dark:border-text-primaryDark':
									item.getHref(username) === pathname,
							}
						)}
						href={item.getHref(username)}
					>
						<item.Icon className='lg:w-3 lg:h-3' />
						<span className='hidden uppercase lg:block'>
							{item.labelI18nKey}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}