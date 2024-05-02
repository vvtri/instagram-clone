import LoginWithScreenshot from '@/modules/auth/components/LoginWithScreenshot';
import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import Navbar from '@/modules/common/components/navbar/Navbar';
import Header from '@/modules/common/components/utility/Header';
import MaxWidthContainer from '@/modules/common/components/utility/MaxWidthContainer';
import ListPost from '@/modules/post/components/ListPost';
import UserStorySlider from '@/modules/user-story/components/UserStorySlider';

export default function RootPage() {
	return (
		<AuthGuard redirectComp={<LoginWithScreenshot />}>
			<Header />

			<MaxWidthContainer className='lg:pl-[72px]'>
				<div className=''>
					<UserStorySlider />
				</div>

				<ListPost />
			</MaxWidthContainer>

			<Navbar />
		</AuthGuard>
	);
}
