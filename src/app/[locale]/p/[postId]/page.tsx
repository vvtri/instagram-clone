import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import Footer from '@/modules/common/components/footer/Footer';
import Navbar from '@/modules/common/components/navbar/Navbar';
import MaxWidthContainer from '@/modules/common/components/utility/MaxWidthContainer';
import PostDetail from '@/modules/post/components/PostDetail';

type PostDetailPageProps = {
	params: {
		postId: string;
	};
};

export default function PostDetailPage(props: PostDetailPageProps) {
	const { params } = props;
	const { postId } = params;

	return (
		<AuthGuard>
			<Navbar />
			<MaxWidthContainer>
				<PostDetail
					footer={<Footer className='mb-6' />}
					postId={parseInt(postId)}
				/>
			</MaxWidthContainer>
		</AuthGuard>
	);
}
