import LoginWithScreenshot from '@/modules/auth/components/LoginWithScreenshot';
import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import HomeFooter from '@/modules/common/components/home/HomeFooter';
import HomeSwitchAccount from '@/modules/common/components/home/HomeSwitchAccount';
import Navbar from '@/modules/common/components/navbar/Navbar';
import Header from '@/modules/common/components/utility/Header';
import MaxWidthContainer from '@/modules/common/components/utility/MaxWidthContainer';
import PostList from '@/modules/post/components/PostList';
import UserStorySlider from '@/modules/user-story/components/UserStorySlider';
import HomeSuggestUser from '@/modules/user/components/HomeSuggestUser/HomeSuggestUser';

export default function RootPage() {
	return (
		<AuthGuard redirectComp={<LoginWithScreenshot />}>
			<Header />
			<MaxWidthContainer>
				<div className='mt-3 xl:flex xl:justify-center xl:mt-8 px-4 sm:px-0'>
					<div className=' mx-auto sm:max-w-[630px]  xl:m-0'>
						<div className=''>
							<UserStorySlider />
						</div>

						<PostList />
					</div>

					<div className='hidden xl:block pl-16 flex-shrink-0'>
						<div className='w-[319px] px-4'>
							<div className=''>
								<HomeSwitchAccount />
							</div>

							<div className='mt-8'>
								<HomeSuggestUser />
							</div>

							<div className=' mt-14'>
								<HomeFooter />
							</div>
						</div>
					</div>
				</div>
			</MaxWidthContainer>

			<Navbar />
		</AuthGuard>
	);
}
