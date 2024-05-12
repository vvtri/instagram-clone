'use client';

import ErrorModal from '@/modules/common/components/error/ErrorModal';
import Modal from '@/modules/common/components/modal/Modal';
import { getHomeLink } from '@/modules/common/helpers/link.helper';
import {
  useAppDispatch,
  useAppSelector,
} from '@/modules/common/hooks/store.hook';
import { useRouter } from 'next/navigation';
import { PostModel } from '../apis/post.api';
import { useDetailPost } from '../hooks/use-detail-post';
import { setShowPostModal } from '../slices/post.slice';
import PostDetailLargeScreenContent, {
  PostDetailLargeScreenContentSkeleton,
} from './PostDetailLargeScreenContent';

export default function PostDetailModal() {
  const dispatch = useAppDispatch();
  const { isShow, postId } = useAppSelector(({ post }) => post.modal);
  const onClose = () => dispatch(setShowPostModal({ isShow: false }));
  const router = useRouter();
  const { data, isLoading, refetch } = useDetailPost(postId);

  if (isShow && !postId)
    return <ErrorModal retry={() => router.push(getHomeLink())} />;
  if (isShow && !data && !isLoading) return <ErrorModal retry={refetch} />;

  return (
    <Modal
      isShow={isShow}
      showCloseButton
      onClickOutside={onClose}
      onClose={onClose}
    >
      <div className="w-full max-w-[70vw] h-full max-h-[calc(100vh_-_60px)]">
        {isLoading && (
          <PostDetailLargeScreenContentSkeleton
            isModal
            className="w-full h-full pt-0 max-h-[calc(100vh_-_60px)]"
          />
        )}

        {data && (
          <PostDetailLargeScreenContent
            post={data as PostModel}
            className="w-full h-full pt-0 max-h-[calc(100vh_-_60px)]"
            isModal
          />
        )}
      </div>
    </Modal>
  );
}
