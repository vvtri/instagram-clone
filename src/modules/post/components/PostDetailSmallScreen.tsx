import MobilePageHeader from '@/modules/common/components/headers/MobilePageHeader';
import { useWithinPage } from '@/modules/common/providers/OriginProvider';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { PostModel } from '../apis/post.api';
import PostCard from './PostCard';
import PostSuggestion from './PostSuggestion';

type PostDetailSmallSCreenProps = {
  post: PostModel;
};

export default function PostDetailSmallSCreen({
  post,
}: PostDetailSmallSCreenProps) {
  const t = useTranslations('Client');
  const router = useRouter();
  const isWithinPage = useWithinPage();

  return (
    <div className="w-full">
      <MobilePageHeader title={t('common.word.post')} />

      <PostCard post={post} className="sm:max-w-full max-w-full" />

      <div className="my-14 w-full border-t border-separator" aria-hidden />

      <PostSuggestion post={post} />

      <div className="pb-4" aria-hidden></div>
    </div>
  );
}
