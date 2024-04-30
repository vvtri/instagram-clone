'use client';
import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpFormData, signUpSchema } from '../../schema/sign-up.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
import InstaButton from '@/modules/common/components/Button';
import InstaLink from '@/modules/common/components/InstaLink';
import AuthInput from '../AuthInput';
import error from 'next/error';

type SignUpFormProps = {
	i18n: {
		phoneNumberOrEmail: string;
		fullName: string;
		username: string;
		password: string;
		contactUploadingWarning: ReactNode;
		signUpPolicy: ReactNode;
		signUpBtn: string;
	};
};

export default function SignUpForm(props: SignUpFormProps) {
	const { i18n } = props;

	const { register, handleSubmit, formState } = useForm<SignUpFormData>({
		resolver: yupResolver(signUpSchema),
	});


	const handleSignUp = (data: SignUpFormData) => {
		console.log('data', data);
	};

	const getInputValid = (key: keyof typeof formState.errors) => {
		let error = formState.errors[key];
		if (error === undefined) return error;

		return !error;
	};

	return (
		<form className='w-full space-y-2' onSubmit={handleSubmit(handleSignUp)}>
			<AuthInput
				{...register('phoneNumberOrEmail')}
				type='text'
				placeholder={i18n.phoneNumberOrEmail}
				isValid={getInputValid('phoneNumberOrEmail')}
			/>
			<AuthInput
				{...register('fullName')}
				type='text'
				placeholder={i18n.fullName}
				isValid={getInputValid('fullName')}
			/>
			<AuthInput
				{...register('username')}
				type='text'
				placeholder={i18n.username}
				isValid={getInputValid('username')}
			/>
			<AuthInput
				{...register('password')}
				type='password'
				placeholder={i18n.password}
				isValid={getInputValid('password')}
			/>

			<div className='text-xs text-text-secondary space-y-5 text-center pt-5 pb-4'>
				<p className='whitespace-pre-line'>{i18n.contactUploadingWarning}</p>

				<p className='whitespace-pre-line'>{i18n.signUpPolicy}</p>
			</div>

			<InstaButton className='w-full'>{i18n.signUpBtn}</InstaButton>
		</form>
	);
}
