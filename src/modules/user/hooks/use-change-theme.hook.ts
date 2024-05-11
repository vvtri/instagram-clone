import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';
import { ChangeThemeParams, changeTheme } from '../apis/user.api';

export const useChangeTheme = <T = any>(
	opts?: UseMutationOptions<
		AsyncReturnType<typeof changeTheme>,
		any,
		ChangeThemeParams,
		T
	>
) => {
	return {
		...useMutation<
			AsyncReturnType<typeof changeTheme>,
			any,
			ChangeThemeParams,
			T
		>({ mutationFn: (params) => changeTheme(params), ...opts }),
	};
};
