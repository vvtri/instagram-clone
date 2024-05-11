'use client';

import { useFormatter } from 'next-intl';
import { ReactNode } from 'react';
import { PostModel } from '../apis/post.api';
import PostDetailLargeScreenContent from './PostDetailLargeScreenContent';
import PostSuggestion from './PostSuggestion';
import { useToast } from '@/modules/common/hooks/use-toast.hook';

type PostDetailLargeScreenProps = {
	post: PostModel;
	footer?: ReactNode;
};

export default function PostDetailLargeScreen(
	props: PostDetailLargeScreenProps
) {
	const { post, footer } = props;
  const { warning } = useToast();

	return (
		<div className='w-full p-5'>
			<div className='mx-auto'>
				<PostDetailLargeScreenContent post={post} />
			</div>

			<div className='my-14 w-full border-t border-separator' aria-hidden />

			<PostSuggestion post={post} />

			{footer}
		</div>
	);
}
