import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import LoadingSpinner from '@/modules/common/components/utility/LoadingSpinner';
import { getUserProfileLink } from '@/modules/common/helpers/link.helper';
import { PostModel } from '@/modules/post/apis/post.api';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';
import { cn } from '@/utilities/tailwind/cn';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';
import { useInfiniteComment } from '../hooks/use-infinite-comment.hook';
import Comment, { CommentSkeleton } from './Comment';

type CommentListProps = {
  post: PostModel;
  className?: string;
};

export default function CommentList(props: CommentListProps) {
  const { className, post } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const format = useFormatter();
  const t = useTranslations('Client');

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteComment({
      postId: post.id,
      size: 20,
    });

  useEffect(() => {
    const handler = (e: Event) => {
      const div = ref.current;
      if (!div) return;

      const shouldFetch =
        div.scrollHeight - div.scrollTop - div.offsetHeight < 400;
      if (shouldFetch) fetchNextPage();
    };

    if (!ref.current) return;

    ref.current.addEventListener('scroll', handler);

    return () => ref.current?.removeEventListener('scroll', handler);
  }, [ref.current]);

  let commentComps: ReactNode[];

  if (data) {
    commentComps = data.pages.flatMap((page) =>
      page.data.map((item) => <Comment comment={item} key={item.id} />),
    );
  } else {
    commentComps = Array(6)
      .fill(0)
      .map((item, idx) => <CommentSkeleton key={`skeleton-${idx}`} />);
  }
  const hasComment = Boolean(data?.pages?.[0]?.data?.length);

  return (
    <div
      className={cn(
        'w-full absolute top-0 left-0 px-[16px] h-full overflow-y-auto',
        className,
      )}
      ref={ref}
    >
      <div className="flex py-3 text-sm items-center">
        <Link
          href={getUserProfileLink(post.user.username)}
          className="relative w-[32px] aspect-square rounded-full overflow-hidden mr-2 flex-shrink-0"
        >
          <Image
            src={post.user.avt}
            alt=""
            fill
            className="object-cover"
            sizes={genImageSizesProp({ default: '32px' })}
          />
        </Link>

        <div className="flex items-center flex-grow">
          <div className="flex flex-col justify-center grow">
            <div className="flex gap-2 items-center">
              <Link
                className="font-semibold"
                href={getUserProfileLink(post.user.username)}
              >
                {post.user?.username}
              </Link>
              <VerifySvgIcon />
              <p className=" text-text-secondary">
                {format.relativeTime(new Date(post.createdAt))}
              </p>
            </div>

            <p className="">{post.title}</p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-separator my-3 lg:hidden" />

      {!hasComment && (
        <div className="flex flex-col items-center pt-6">
          <h4 className="text-2xl font-bold pb-3 tracking-wide">
            {t('post.commentPage.noComment')}
          </h4>
          <p className="text-sm">{t('post.commentPage.encourageComment')}</p>
        </div>
      )}
      {hasComment && commentComps}

      {isFetchingNextPage && (
        <div className="flex items-center justify-center w-full py-4">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
