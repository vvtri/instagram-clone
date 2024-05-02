'use client';

import { ApiError } from '@/data/error-code.data';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AsyncReturnType } from 'type-fest';
import { signIn } from '../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../constants/auth.constant';
import { SignInFormData } from '../schema/sign-in.scheme';

export const useSignIn = (
	// opts: Pick<
	// 	MutationOptions<AsyncReturnType<typeof signIn>, ApiError, SignInFormData>,
	// 	'onError' | 'onSuccess'
	// >
	redirectUrl: string = '/'
) => {
	const t = useTranslations('Client');
	const router = useRouter();

	return useMutation<AsyncReturnType<typeof signIn>, ApiError, SignInFormData>({
		mutationFn: (data: SignInFormData) => signIn(data),
		// ...opts,
		onSuccess: (data) => {
			const { token, user } = data;
			toast.success(t('auth.signIn.successToast'));

			setCookie(ACCESS_TOKEN_COOKIE_KEY, token);
			router.push(redirectUrl);
			router.refresh();
		},
		onError: (error) => {
			const { code } = error;

			toast.error(t('auth.signIn.errorToast', { errorCode: code }));
		},
	});
};
