import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { InfiniteData, useQuery } from '@tanstack/react-query';
import {
  GetDetailUserStoryParams,
  getDetailUserStory,
} from '../apis/user-story.api';
import { ApiError } from 'next/dist/server/api-utils';

export const useDetailUserStory = (params: GetDetailUserStoryParams) => {
  const queryKey = [QueryKey.DETAIL_USER_STORY, params];

  return {
    ...useQuery<
      Awaited<ReturnType<typeof getDetailUserStory>>,
      ApiError,
      Awaited<ReturnType<typeof getDetailUserStory>>
    >({
      queryKey,
      queryFn: ({}) => getDetailUserStory({ ...params }),
    }),
  };
};
