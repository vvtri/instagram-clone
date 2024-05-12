import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import CommentPage from '@/modules/comment/components/CommentPage';
import Navbar from '@/modules/common/components/navbar/Navbar';

type PostCommentPageProps = {
  params: {
    postId: string;
  };
};

export default function PostCommentPage(props: PostCommentPageProps) {
  const { params } = props;
  const { postId } = params;

  return (
    <AuthGuard>
      <Navbar />
      <CommentPage postId={parseInt(postId)} />
    </AuthGuard>
  );
}
