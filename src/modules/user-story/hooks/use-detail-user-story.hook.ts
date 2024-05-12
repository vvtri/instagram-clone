import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useQuery } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import {
  GetDetailUserStoryParams,
  getDetailUserStory,
} from '../apis/user-story.api';

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
