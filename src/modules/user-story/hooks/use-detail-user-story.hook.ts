import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useQuery } from '@tanstack/react-query';
import {
	GetDetailUserStoryParams,
	getDetailUserStory,
} from '../apis/user-story.api';

export const useDetailUserStory = (params: GetDetailUserStoryParams) => {
	const queryKey = [QueryKey.DETAIL_USER_STORY, params];

	return {
		...useQuery({
			queryKey,
			queryFn: ({}) => getDetailUserStory({ ...params }),
			keepPreviousData: false,
		}),
	};
};
