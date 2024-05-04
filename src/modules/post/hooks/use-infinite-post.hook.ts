import { useInfiniteQuery } from 'react-query';
import { GetListPostParams, getListPost } from '../apis/post.api';
import { QueryKey } from '@/modules/common/constants/query-key.constant';

export const useInfinitePost = (params: GetListPostParams) => {
	const queryKey = [QueryKey.INFINITE_POST, params];

	return {
		...useInfiniteQuery({
			queryKey,
			queryFn: ({ pageParam }) => getListPost({ ...params, page: pageParam }),
			getNextPageParam: (lastPage, allPages) => {
				const { currentPage, hasNextPage } = lastPage;
				if (hasNextPage) return currentPage + 1;
			},
			keepPreviousData: false,
		}),
	};
};
