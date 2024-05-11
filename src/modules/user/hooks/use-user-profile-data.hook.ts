import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useQuery } from '@tanstack/react-query';
import { GetUserProfileParams, getUserProfile } from '../apis/user.api';

export const useUserProfileData = (params: GetUserProfileParams) => {
	const queryKey = [QueryKey.USER_PROFILE, params];

	return {
		...useQuery({
			queryKey,
			queryFn: () => getUserProfile(params),
		}),
	};
};
