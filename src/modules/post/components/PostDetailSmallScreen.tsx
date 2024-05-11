import React from 'react';
import PostCard from './PostCard';
import { PostModel } from '../apis/post.api';
import CaretSvgIcon from '@/modules/common/components/icon/svg-icon/CaretSvgIcon';
import PostSuggestion from './PostSuggestion';
import { useTranslations } from 'next-intl';
import MobilePageHeader from '@/modules/common/components/headers/MobilePageHeader';
import { useRouter } from 'next/navigation';
import { useWithinPage } from '@/modules/common/providers/OriginProvider';

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
		<div className='w-full'>
			<MobilePageHeader title={t('common.word.post')} />

			<PostCard post={post} className='sm:max-w-full max-w-full' />

			<div className='my-14 w-full border-t border-separator' aria-hidden />

			<PostSuggestion post={post} />

			<div className='pb-4' aria-hidden></div>
		</div>
	);
}
