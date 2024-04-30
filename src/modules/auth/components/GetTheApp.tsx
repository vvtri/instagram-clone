import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type DownloadAppProps = PropsWithChildren<{
	className?: string;
}>;

export default function GetTheApp({ className }: DownloadAppProps) {
	const t = useTranslations('Auth');

	return (
		<div>
			<p className='text-center my-4'>{t('common.form.getTheApp')}</p>

			<div className='flex items-center justify-center w-full space-x-1'>
				<Link
					href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2BF3A309-9C94-42F1-9E68-00937BAF72EA%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Femailsignup%252F'
					target='_blank'
				>
					<Image
						className='block h-[40px]'
						src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png'
						width={135}
						height={40}
						alt='Download from google play'
					/>
				</Link>

				<Link
					href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1080'
					target='_blank'
				>
					<Image
						className='block h-[40px]'
						src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png'
						width={135}
						height={40}
						alt='Download from microsoft'
					/>
				</Link>
			</div>
		</div>
	);
}
