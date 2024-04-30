import * as yup from 'yup';

export const signInSchema = yup
	.object({
		phoneNumberOrUsernameOrEmail: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

export type SignInFormData = yup.InferType<typeof signInSchema>;
