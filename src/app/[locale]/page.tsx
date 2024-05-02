import AuthBoxContainer from '@/modules/auth/components/BoxContainer';
import LoginWithScreenshot from '@/modules/auth/components/LoginWithScreenshot';
import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import Header from '@/modules/common/components/utility/Header';
import ListPost from '@/modules/post/components/ListPost';
import PostCard from '@/modules/post/components/PostCard';
import UserStoryCard from '@/modules/user-story/components/UserStoryCard';
import UserStorySlider from '@/modules/user-story/components/UserStorySlider';
import Slider from 'react-slick';

export default function RootPage() {
	return (
		<AuthGuard redirectComp={<LoginWithScreenshot />}>
			<Header />

			<UserStorySlider />

			<ListPost />
		</AuthGuard>
	);
}
