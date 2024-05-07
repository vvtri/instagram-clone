import { QueryKey } from '@/modules/common/constants/query-key.constant';
import {
	GetListUserStoryParams,
	getListUserStory,
} from '../apis/user-story.api';
import { UseInfiniteQueryOptions, useInfiniteQuery } from 'react-query';

export const useInfiniteUserStory = (
	params?: GetListUserStoryParams,
	opts?: UseInfiniteQueryOptions
) => {
	const queryKey = [QueryKey.INFINITE_USER_STORY];

	return {
		...useInfiniteQuery({
			queryKey,
			queryFn: ({ pageParam }) =>
				getListUserStory({ ...params, page: pageParam }),
			getNextPageParam: (lastPage, allPages) => {
				const { currentPage, hasNextPage } = lastPage || {};
				if (hasNextPage) return currentPage + 1;
			},
			keepPreviousData: false,
		}),
	};
};
