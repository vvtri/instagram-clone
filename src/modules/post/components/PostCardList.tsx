'use client';
import LoadingSpinner from '@/modules/common/components/utility/LoadingSpinner';
import { ReactNode, useEffect, useRef } from 'react';
import { useInfinitePost } from '../hooks/use-infinite-post.hook';
import PostCard, { PostCardSkeleton } from './PostCard';
import PostDetailModal from './PostDetailModal';

type ListPostProps = {
  className?: string;
};

export default function PostList({ className }: ListPostProps) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePost({
      page: 0,
      size: 5,
    });
  const containerRef = useRef<HTMLDivElement | null>(null);

  let postCards: ReactNode[] = [];

  if (data) {
    postCards = data.pages.flatMap((page, pageIdx) =>
      page.data.map((item, postIdx) => (
        <PostCard
          post={item}
          key={item.id}
          imagePriority={pageIdx === 0 && postIdx === 0}
        />
      )),
    );
  } else {
    postCards = Array(10)
      .fill(0)
      .map((item, idx) => <PostCardSkeleton key={idx} />);
  }

  useEffect(() => {
    const handler = (e: Event) => {
      const div = containerRef.current;
      if (!div) return;

      const shouldFetch =
        div.scrollHeight - div.scrollTop - div.offsetHeight < 400;

      if (shouldFetch) fetchNextPage();
    };

    if (!containerRef.current) return;

    document.addEventListener('scroll', handler);

    return () => document?.removeEventListener('scroll', handler);
  }, [containerRef.current]);

  return (
    <div className="w-full flex items-center flex-col overflow-hidden pb-10">
      <PostDetailModal />

      <div
        className="w-full flex-col items-center flex pb-14 lg:pb-2"
        ref={containerRef}
      >
        {postCards}
      </div>

      {isFetchingNextPage && <LoadingSpinner iconClass="w-14 h-14" />}
    </div>
  );
}
