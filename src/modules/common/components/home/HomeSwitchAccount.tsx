'use client';

import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import Image from 'next/image';
import React from 'react';
import InstaButton from '../utility/InstaButton';
import { useTranslations } from 'next-intl';
import { upperFirstChar } from '@/utilities/text/upper-first-char';

export default function HomeSwitchAccount() {
	const { user } = useAuth();
	const t = useTranslations('Client');

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
					{user.fullName}
				</span>
			</div>

			<InstaButton
				className='text-xs ml-auto flex-shrink-0 pr-0'
				variant='outline'
			>
				{upperFirstChar(t('common.word.switch'))}
			</InstaButton>
		</div>
	);
}
