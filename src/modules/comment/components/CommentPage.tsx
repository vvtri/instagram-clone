'use client';

import MobilePageHeader from '@/modules/common/components/headers/MobilePageHeader';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import { getPostDetailLink } from '@/modules/common/helpers/link.helper';
import { useResponsive } from '@/modules/common/hooks/use-responsive';
import { useDetailPost } from '@/modules/post/hooks/use-detail-post';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import CommentList from './CommentList';
import SmallScreenCommentInput from './SmallScreenCommentInput';

type CommentPageProps = {
  postId: number;
};

export default function CommentPage(props: CommentPageProps) {
  const { postId } = props;
  const router = useRouter();
  const { isLargeDevice } = useResponsive();
  const t = useTranslations('Client');
  const { data, isLoading } = useDetailPost(postId);

  if (isLargeDevice) {
    router.push(getPostDetailLink(postId));
    return null;
  }

  if (!data) return <LoadingScreen />;

  return (
    <main className="w-full h-screen flex-col flex pb-12">
      <MobilePageHeader title={t('common.word.comment')} />

      <div className="relative flex-1">
        <CommentList post={data} />
      </div>

      <SmallScreenCommentInput />
    </main>
  );
}
