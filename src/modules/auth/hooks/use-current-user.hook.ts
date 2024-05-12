import { QueryKey } from '@/modules/common/constants/query-key.constant';
import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'next-client-cookies';
import { getCurrentUser } from '../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../constants/auth.constant';

export const useCurrentUser = () => {
  const queryKey = [QueryKey.CURRENT_USER];

  const cookies = useCookies();

  return {
    ...useQuery({
      queryKey,
      queryFn: () => {
        const token = cookies.get(ACCESS_TOKEN_COOKIE_KEY);
        if (!token) return null;
        return getCurrentUser(token);
      },
    }),
  };
};
