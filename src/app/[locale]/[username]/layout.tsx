'use client';

import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import Footer from '@/modules/common/components/footer/Footer';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import Navbar from '@/modules/common/components/navbar/Navbar';
import MaxWidthContainer from '@/modules/common/components/utility/MaxWidthContainer';
import UserProfileHeader from '@/modules/user/components/UserProfile/UserProfileHeader';
import UserProfilePersonalInfo from '@/modules/user/components/UserProfile/UserProfilePersonalInfo';
import { useUserProfileData } from '@/modules/user/hooks/use-user-profile-data.hook';
import { redirect } from 'next/navigation';
import React, { PropsWithChildren, ReactNode } from 'react';

type UserProfileLayoutProps = PropsWithChildren<{
	footer: ReactNode;
	params: {
		locale: string;
		username: string;
	};
}>;

export default function UserProfileLayout(props: UserProfileLayoutProps) {
	const { children, params, footer } = props;
	const { locale, username } = params;

	const { data, isLoading } = useUserProfileData({ username });

	if (isLoading) return <LoadingScreen />;
	if (!data) return redirect('/');

	return (
		<>
			<AuthGuard>
				<MaxWidthContainer>
					<div className='w-full xl:w-[935px] mx-auto'>
						<UserProfileHeader username={username} />

						<UserProfilePersonalInfo username={username} />

						{children}
					</div>

					{footer}
				</MaxWidthContainer>

				<Navbar />
			</AuthGuard>
		</>
	);
}
