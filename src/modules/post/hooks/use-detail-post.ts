import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useQuery } from '@tanstack/react-query';
import { PostModel, getDetailPost } from '../apis/post.api';

export const useDetailPost = (postId?: number) => {
	const queryKey = [QueryKey.DETAIL_POST, postId];

	return {
		...useQuery<PostModel, Error, PostModel>({
			queryKey,
			queryFn: () => getDetailPost({ postId: postId as number }),
			enabled: Boolean(postId),
		}),
	};
};
