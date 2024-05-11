import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { GetListPostParams, getListPost } from '../apis/post.api';
import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { ApiError } from '@/data/error-code.data';

export const useInfinitePost = (params?: GetListPostParams) => {
	const queryKey = [QueryKey.INFINITE_POST];

	return {
		...useInfiniteQuery<
			Awaited<ReturnType<typeof getListPost>>,
			ApiError,
			InfiniteData<Awaited<ReturnType<typeof getListPost>>>,
			typeof queryKey,
			number
		>({
			queryKey,
			queryFn: ({ pageParam }) => {
				return getListPost({ ...params, page: pageParam });
			},
			getNextPageParam: (lastPage, allPages) => {
				const { currentPage, hasNextPage } = lastPage;
				if (hasNextPage) return currentPage + 1;
			},
			initialPageParam: params?.page || 1,
		}),
	};
};
