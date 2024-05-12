'use client';

import { ApiError } from '@/data/error-code.data';
import { useMutation } from '@tanstack/react-query';
import { useCookies } from 'next-client-cookies';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AsyncReturnType } from 'type-fest';
import { signIn } from '../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../constants/auth.constant';
import { SignInFormData } from '../schema/sign-in.scheme';

export const useSignIn = (redirectUrl: string = '/') => {
  const t = useTranslations('Client');
  const router = useRouter();
  const cookies = useCookies();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  return useMutation<AsyncReturnType<typeof signIn>, ApiError, SignInFormData>({
    mutationFn: (data: SignInFormData) => signIn(data),
    onSuccess: (data) => {
      const { token, user } = data;
      toast.success(t('auth.signIn.successToast'), { theme: resolvedTheme });

      cookies.set(ACCESS_TOKEN_COOKIE_KEY, token.toString());

      if (pathname === redirectUrl) {
        window.location.reload();
      } else {
        router.push(redirectUrl);
      }
    },
    onError: (error) => {
      const { code } = error;

      toast.error(t('auth.signIn.errorToast', { errorCode: code }));
    },
  });
};
