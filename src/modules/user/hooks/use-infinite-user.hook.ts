import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useInfiniteQuery } from 'react-query';
import { GetListUserParams, getListUser } from '../apis/user.api';

export const useInfiniteUser = (params: GetListUserParams) => {
	const queryKey = [QueryKey.INFINITE_USER];

	return {
		...useInfiniteQuery({
			queryKey,
			queryFn: ({ pageParam }) => getListUser({ ...params, page: pageParam }),
			getNextPageParam: (lastPage) => {
				const { currentPage, hasNextPage } = lastPage;
				if (hasNextPage) return currentPage + 1;
			},
			keepPreviousData: false,
		}),
	};
};
