import MoreSvgIcon from '@/modules/common/components/icon/svg-icon/MoreSvgIcon';
import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import AvatarSkeleton from '@/modules/common/components/skeleton/AvatarSkeleton';
import BoxSkeleton from '@/modules/common/components/skeleton/BoxSkeleton';
import ImageWithGradientBorder from '@/modules/common/components/utility/ImageWithGradientBorder';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';
import { cn } from '@/utilities/tailwind/cn';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import Slider from 'react-slick';
import { PostModel } from '../apis/post.api';
import PostAction from './PostAction';
import PostCardCommentInput from '../../comment/components/PostCardCommentInput';
import Link from 'next/link';
import {
  getPostCommentLink,
  getPostDetailLink,
  getUserProfileLink,
} from '@/modules/common/helpers/link.helper';
import { useAppDispatch } from '@/modules/common/hooks/store.hook';
import { useResponsive } from '@/modules/common/hooks/use-responsive';
import { setShowPostModal } from '../slices/post.slice';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useToast } from '@/modules/common/hooks/use-toast.hook';
import { useInView } from 'framer-motion';

type PostCardProps = {
  className?: string;
  post: PostModel;
};

export default function PostCard({ className, post }: PostCardProps) {
  const { isLargeDevice } = useResponsive();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const format = useFormatter();
  const t = useTranslations('Client');
  const { warning } = useToast();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapperRef, { once: true });

  const onViewAllComments = () => {
    if (isLargeDevice)
      dispatch(setShowPostModal({ isShow: true, postId: post.id }));
    else router.push(getPostCommentLink(post.id));
  };

  return (
    <div
      className={cn(
        'w-full sm:max-w-[470px] pt-2 lg:border-b lg:border-separator',
        className,
      )}
    >
      <div className="flex items-center p-3">
        <Link href={getUserProfileLink(post.user.username)}>
          <ImageWithGradientBorder length={32} imageUrl={post.user.avt} />
        </Link>

        <div className="flex flex-col ml-3">
          <div className="flex items-center font-semibold text-sm space-x-1">
            <Link href={getUserProfileLink(post.user.username)}>
              {post.user.username}
            </Link>
            <VerifySvgIcon />
            <span className="text-sm">•</span>
            <Link
              href={getPostDetailLink(post.id)}
              className="text-sm text-text-secondary"
            >
              {format.relativeTime(new Date(post.createdAt))}
            </Link>
          </div>
          <span className="text-xs font-normal">
            Jungle
            <span className="text-sm mx-1">•</span>
            I've Been In Love
          </span>
        </div>

        <div
          className="ml-auto cursor-pointer p-2"
          onClick={() => warning(t('common.error.functionIsNotImplemented'))}
        >
          <MoreSvgIcon />
        </div>
      </div>

      <Slider
        dots={true}
        arrows={true}
        infinite={false}
        speed={100}
        className="w-full post-card-image-slide"
        slidesToShow={1}
      >
        {post.images.map((item, idx) => (
          <div key={idx}>
            <div
              className="relative w-full aspect-square"
              style={{ aspectRatio: post.imageRatio }}
            >
              <Image
                src={item}
                sizes={genImageSizesProp({ default: '100vw', sm: '640px' })}
                fill
                alt=""
                priority={isInView}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="p-5 pb-3 lg:px-0">
        <PostAction
          onBookmark={() => warning(t('common.error.functionIsNotImplemented'))}
          onLike={() => warning(t('common.error.functionIsNotImplemented'))}
          onShare={() => warning(t('common.error.functionIsNotImplemented'))}
          onMessage={() => warning(t('common.error.functionIsNotImplemented'))}
        />

        <p className="font-semibold text-sm mt-3">
          {t('post.common.likeAmount', { likes: post.likeAmount })}
        </p>

        <div className="mt-2">
          <div className="">
            <div className="flex space-x-1 items-center">
              <p className="text-sm font-semibold">{post.user.username}</p>
              <VerifySvgIcon />
              <p className="text-sm">{post.title}</p>
            </div>
          </div>
        </div>

        <p
          className="text-sm text-text-secondary mt-1 cursor-pointer"
          onClick={onViewAllComments}
        >
          {t('post.common.viewComment', { comments: post.commentAmount })}
        </p>

        <PostCardCommentInput />
      </div>
    </div>
  );
}

export function PostCardSkeleton({
  className,
}: Pick<PostCardProps, 'className'>) {
  return (
    <div className={cn('w-full sm:max-w-[470px] mb-10 pt-6', className)}>
      <div className="h-[42px] flex mb-3">
        <AvatarSkeleton containerClassName="w-[42px] mr-3" />

        <BoxSkeleton />
      </div>

      <Skeleton containerClassName="flex" className="w-full aspect-square" />
    </div>
  );
}
