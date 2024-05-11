'use client';
import CommentList from '@/modules/comment/components/CommentList';
import MoreSvgIcon from '@/modules/common/components/icon/svg-icon/MoreSvgIcon';
import VerifySvgIcon from '@/modules/common/components/icon/svg-icon/VerifySvgIcon';
import MotionDiv from '@/modules/common/components/utility/MotionDiv';
import { getUserProfileLink } from '@/modules/common/helpers/link.helper';
import { genImageSizesProp } from '@/utilities/image/gen-image-sizes-prop';
import { cn } from '@/utilities/tailwind/cn';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import Slider from 'react-slick';
import { PostModel } from '../apis/post.api';
import PostAction from './PostAction';
import PostDetailCommentInput from '@/modules/comment/components/PostDetailCommentInput';
import { useToast } from '@/modules/common/hooks/use-toast.hook';

type PostDetailLargeScreenContentProps = {
	post: PostModel;
	className?: string;
	isModal?: boolean;
};

export default function PostDetailLargeScreenContent(
	props: PostDetailLargeScreenContentProps
) {
	const { post, className, isModal } = props;
	const format = useFormatter();
	const t = useTranslations('Client');
	const { warning } = useToast();

	return (
		<MotionDiv
			variants={{
				hidden: { opacity: 0, scale: 1.1 },
				visible: { opacity: 1, scale: 1 },
			}}
			initial='hidden'
			animate='visible'
			viewport={{ amount: 1 }}
			transition={{ duration: 0.2 }}
			className={cn(
				'w-full max-w-[815px] mx-auto pt-7 bg-bg-primary text-text-primary',
				{ 'max-w-[70vw]': isModal },
				className
			)}
		>
			<div className='flex w-full border border-black dark:border-separator h-full'>
				<Slider
					dots={true}
					arrows={true}
					infinite={false}
					speed={100}
					className={cn('grow min-h-[500px] min-w-0 post-detail-image-slide')}
					slidesToShow={1}
				>
					{post.images.map((item, idx) => (
						<div key={idx}>
							<div
								className='relative w-full'
								style={{ aspectRatio: post.imageRatio }}
							>
								<Image
									src={item}
									sizes={genImageSizesProp({ default: '800px' })}
									fill
									alt=''
									className='object-contain w-full object-right pr-[1px] bg-black'
									priority
								/>
							</div>
						</div>
					))}
				</Slider>

				<div
					className={cn('w-[335px] flex flex-shrink-0 flex-col', {
						'w-[30vw]': isModal,
					})}
				>
					<div className='flex items-center flex-shrink-0 py-[14px] px-[16px] border-b border-separator'>
						<Link
							href={getUserProfileLink(post.user.username)}
							className='relative w-8 aspect-square rounded-full overflow-hidden'
						>
							<Image
								src={post.user.avt}
								fill
								alt='user avatar'
								className='object-cover'
							/>
						</Link>

						<div className='flex flex-col ml-3'>
							<div className='flex items-center font-semibold text-sm space-x-1'>
								<Link href={getUserProfileLink(post.user.username)}>
									{post.user.username}
								</Link>
								<VerifySvgIcon />
								<span className='text-sm'>•</span>
								<span className='text-sm text-text-primary hover:text-text-secondary first-letter:uppercase'>
									{t('common.word.following')}
								</span>
							</div>
						</div>

						<div
							className='ml-auto cursor-pointer p-2'
							onClick={() =>
								warning(t('common.error.functionIsNotImplemented'))
							}
						>
							<MoreSvgIcon />
						</div>
					</div>

					<div className='flex-grow relative'>
						<CommentList post={post} />
					</div>

					<div className='flex-grow-0 p-[16px] border-separator border-t gap-1 items-center'>
						<PostAction
							onBookmark={() =>
								warning(t('common.error.functionIsNotImplemented'))
							}
							onLike={() => warning(t('common.error.functionIsNotImplemented'))}
							onShare={() =>
								warning(t('common.error.functionIsNotImplemented'))
							}
							onMessage={() =>
								warning(t('common.error.functionIsNotImplemented'))
							}
						/>

						<p className='font-semibold text-sm mt-2'>
							{t('post.common.likeAmount', { likes: post.likeAmount })}
						</p>

						<span className='block text-text-secondary text-xs mt-1'>
							{format.dateTime(new Date(post.createdAt), {
								month: 'long',
								day: 'numeric',
							})}
						</span>

						<PostDetailCommentInput className='mt-6' />
					</div>
				</div>
			</div>
		</MotionDiv>
	);
}

export const PostDetailLargeScreenContentSkeleton = (
	props: Omit<PostDetailLargeScreenContentProps, 'post'>
) => {
	const { className, isModal } = props;

	return (
		<div
			className={cn(
				'w-full max-w-[815px] mx-auto pt-7',
				{ 'max-w-[70vw]': isModal },
				className
			)}
		>
			<div className='flex w-full border border-separator h-full'>
				<div className='grow min-h-[500px] min-w-0 bg-bg-mediaOverlay filter-media-overlay' />

				<div
					className={cn(
						'w-[335px] flex flex-shrink-0 flex-col bg-bg-secondary relative',
						{ 'w-[30vw]': isModal }
					)}
				>
					<div className='flex justify-between flex-shrink-0 py-[14px] px-[16px] border-b border-separator '>
						<Skeleton circle height={32} width={32} />
						<div className='flex flex-col ml-3 w-full text-xs  '>
							<div className='max-w-40'>
								<Skeleton />
							</div>
							<div className='max-w-20'>
								<Skeleton />
							</div>
						</div>
					</div>

					<div className='flex-grow-0 h-1/5 p-[16px] border-separator border-t gap-1 items-center absolute bottom-0 inset-x-0'>
						<div className='max-w-40'>
							<Skeleton />
						</div>
						<div className='max-w-60'>
							<Skeleton />
						</div>
						<div className='max-w-20'>
							<Skeleton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
