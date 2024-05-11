'use client';

import ErrorModal from '@/modules/common/components/error/ErrorModal';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import { useResponsive } from '@/modules/common/hooks/use-responsive';
import { ReactNode } from 'react';
import { useDetailPost } from '../hooks/use-detail-post';
import PostDetailLargeScreen from './PostDetailLargeScreen';
import PostDetailSmallSCreen from './PostDetailSmallScreen';

type PostDetailProps = {
	footer: ReactNode;
	postId: number;
};

export default function PostDetail(props: PostDetailProps) {
	const { footer, postId } = props;
	const { isMediumDevice } = useResponsive();
	const { data, isLoading, isFetching, refetch } = useDetailPost(postId);

	if (isLoading || isFetching) return <LoadingScreen fullScreen={false} />;

	if (!data) return <ErrorModal retry={refetch} />;

	if (isMediumDevice)
		return <PostDetailLargeScreen post={data} footer={footer} />;
	else return <PostDetailSmallSCreen post={data} />;
}
