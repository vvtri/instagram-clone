'use client';
import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpFormData, signUpSchema } from '../../schema/sign-up.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
import InstaButton from '@/modules/common/components/Button';
import InstaLink from '@/modules/common/components/InstaLink';
import AuthInput from '../AuthInput';
import error from 'next/error';
import { SignInFormData, signInSchema } from '../../schema/sign-in.scheme';

type SignInFormProps = {
	i18n: {
		phoneNumberOrUsernameOrEmail: string;
		password: string;
		signInBtn: string;
	};
};

export default function SignInForm(props: SignInFormProps) {
	const { i18n } = props;

	const { register, handleSubmit, formState } = useForm<SignInFormData>({
		resolver: yupResolver(signInSchema),
	});

	const handleSignIn = (data: SignInFormData) => {
		console.log('data', data);
	};

	const getInputValid = (key: keyof typeof formState.errors) => {
		let error = formState.errors[key];
		if (error === undefined) return error;

		return !error;
	};

	return (
		<form className='w-full space-y-2' onSubmit={handleSubmit(handleSignIn)}>
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

			<InstaButton className='w-full'>{i18n.signInBtn}</InstaButton>
		</form>
	);
}
