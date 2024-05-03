'use client';
import InstaButton from '@/modules/common/components/utility/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSignIn } from '../../hooks/use-sign-in.hook';
import { SignInFormData, signInSchema } from '../../schema/sign-in.scheme';
import AuthInput from '../AuthInput';

type SignInFormProps = {
	i18n: {
		phoneNumberOrUsernameOrEmail: string;
		password: string;
		signInBtn: string;
	};
	redirectUrl?: string;
};

export default function SignInForm(props: SignInFormProps) {
	const { i18n, redirectUrl } = props;

	const { mutate, isLoading } = useSignIn(redirectUrl);

	const { register, handleSubmit, formState } = useForm<SignInFormData>({
		resolver: yupResolver(signInSchema),
	});

	const getInputValid = (key: keyof typeof formState.errors) => {
		let error = formState.errors[key];
		if (error === undefined) return error;

		return !error;
	};

	const handleSignIn = (data: SignInFormData) => {
		mutate(data);
	};

	return (
		<form
			className='w-full space-y-2'
			onSubmit={handleSubmit(handleSignIn)}
			noValidate
		>
			<AuthInput
				{...register('phoneNumberOrUsernameOrEmail')}
				type='text'
				placeholder={i18n.phoneNumberOrUsernameOrEmail}
				isValid={getInputValid('phoneNumberOrUsernameOrEmail')}
			/>
			<AuthInput
				{...register('password')}
				type='password'
				placeholder={i18n.password}
				isValid={getInputValid('password')}
			/>

			<InstaButton type='submit' className='w-full' disabled={isLoading}>
				{i18n.signInBtn}
			</InstaButton>
		</form>
	);
}
