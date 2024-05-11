import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { GetListUserParams, getListUser } from '../apis/user.api';
import { ApiError } from '@/data/error-code.data';

export const useInfiniteUser = (params: GetListUserParams) => {
	const queryKey = [QueryKey.INFINITE_USER];

	return {
		...useInfiniteQuery<
			Awaited<ReturnType<typeof getListUser>>,
			ApiError,
			InfiniteData<Awaited<ReturnType<typeof getListUser>>>,
			typeof queryKey,
			number
		>({
			queryKey,
			queryFn: ({ pageParam }) => getListUser({ ...params, page: pageParam }),
			getNextPageParam: (lastPage) => {
				const { currentPage, hasNextPage } = lastPage;
				if (hasNextPage) return currentPage + 1;
			},
			initialPageParam: params.page || 1,
		}),
	};
};
