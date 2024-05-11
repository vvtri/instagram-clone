'use client';

import React from 'react';
import CommentList from './CommentList';
import { useDetailPost } from '@/modules/post/hooks/use-detail-post';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import { useResponsive } from '@/modules/common/hooks/use-responsive';
import { useRouter } from 'next/navigation';
import { getPostDetailLink } from '@/modules/common/helpers/link.helper';
import MobilePageHeader from '@/modules/common/components/headers/MobilePageHeader';
import { useTranslations } from 'next-intl';
import SmallScreenCommentInput from './SmallScreenCommentInput';

type CommentPageProps = {
	postId: number;
};

export default function CommentPage(props: CommentPageProps) {
	const { postId } = props;
	const router = useRouter();
	const { isLargeDevice } = useResponsive();
	if (isLargeDevice) {
		router.push(getPostDetailLink(postId));
		return null;
	}
	const t = useTranslations('Client');

	const { data, isLoading } = useDetailPost(postId);

	if (!data) return <LoadingScreen />;

	return (
		<main className='w-full h-screen flex-col flex pb-12'>
			<MobilePageHeader title={t('common.word.comment')} />

			<div className='relative flex-1'>
				<CommentList post={data} />
			</div>

			<SmallScreenCommentInput />
		</main>
	);
}
