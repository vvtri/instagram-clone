import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { GetListCommentParams, getListComment } from '../apis/comment.api';

export const useInfiniteComment = (params: GetListCommentParams) => {
  const queryKey = [QueryKey.INFINITE_COMMENT, params.postId];

  return {
    ...useInfiniteQuery<
      Awaited<ReturnType<typeof getListComment>>,
      ApiError,
      InfiniteData<Awaited<ReturnType<typeof getListComment>>>,
      typeof queryKey,
      number
    >({
      queryKey,
      queryFn: ({ pageParam }) =>
        getListComment({
          ...params,
          page: pageParam,
        }),
      getNextPageParam: (lastPage, allPages) => {
        const { currentPage, hasNextPage } = lastPage;
        if (hasNextPage) return currentPage + 1;
      },
      initialPageParam: params?.page || 1,
    }),
  };
};
