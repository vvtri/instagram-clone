import { QueryKey } from '@/modules/common/constants/query-key.constant';
import {
  InfiniteData,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import {
  GetListUserStoryParams,
  getListUserStory,
} from '../apis/user-story.api';

export const useInfiniteUserStory = (
  params?: GetListUserStoryParams,
  opts?: UseInfiniteQueryOptions,
) => {
  const queryKey = [QueryKey.INFINITE_USER_STORY];

  return {
    ...useInfiniteQuery<
      Awaited<ReturnType<typeof getListUserStory>>,
      ApiError,
      InfiniteData<Awaited<ReturnType<typeof getListUserStory>>>,
      typeof queryKey,
      number
    >({
      queryKey,
      queryFn: ({ pageParam }) =>
        getListUserStory({ ...params, page: pageParam }),
      getNextPageParam: (lastPage, allPages) => {
        const { currentPage, hasNextPage } = lastPage || {};
        if (hasNextPage) return currentPage + 1;
      },
      initialPageParam: params?.page || 1,
    }),
  };
};
