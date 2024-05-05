'use client';

import { ApiError } from '@/data/error-code.data';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AsyncReturnType } from 'type-fest';
import { signIn } from '../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../constants/auth.constant';
import { SignInFormData } from '../schema/sign-in.scheme';
import { useCookies } from 'next-client-cookies';

export const useSignIn = (
	redirectUrl: string = '/'
) => {
	const t = useTranslations('Client');
	const router = useRouter();
  const cookies= useCookies()

	return useMutation<AsyncReturnType<typeof signIn>, ApiError, SignInFormData>({
		mutationFn: (data: SignInFormData) => signIn(data),
		// ...opts,
		onSuccess: (data) => {
			const { token, user } = data;
			toast.success(t('auth.signIn.successToast'));

      cookies.set(ACCESS_TOKEN_COOKIE_KEY, token.toString());
			router.push(redirectUrl);
			router.refresh();
		},
		onError: (error) => {
			const { code } = error;

			toast.error(t('auth.signIn.errorToast', { errorCode: code }));
		},
	});
};
