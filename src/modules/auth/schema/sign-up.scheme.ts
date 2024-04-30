import * as yup from 'yup';

export const signUpSchema = yup
	.object({
		phoneNumberOrEmail: yup.string().required(),
		fullName: yup.string().required(),
		username: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

export type SignUpFormData = yup.InferType<typeof signUpSchema>;
