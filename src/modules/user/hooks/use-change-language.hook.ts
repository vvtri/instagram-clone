import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AsyncReturnType } from 'type-fest';
import { ChangeLanguageParams, changeLanguage } from '../apis/user.api';

export const useChangeLanguage = <T = any>(
  opts?: UseMutationOptions<
    AsyncReturnType<typeof changeLanguage>,
    any,
    ChangeLanguageParams,
    T
  >,
) => {
  return {
    ...useMutation<
      AsyncReturnType<typeof changeLanguage>,
      any,
      ChangeLanguageParams,
      T
    >({ mutationFn: (params) => changeLanguage(params), ...opts }),
  };
};
