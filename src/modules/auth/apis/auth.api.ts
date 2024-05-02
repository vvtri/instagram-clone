import { ApiError } from '@/data/error-code.data';
import { users } from '@/data/user.data';
import { SignInFormData } from '../schema/sign-in.scheme';

export type UserModel = (typeof users)[number];

export const getCurrentUser = async (token: string) => {
	const userId = parseInt(token);

	const user = users.find((item) => item.id === userId);

	if (!user) throw new ApiError('notFound');

	return user;
};

export const signIn = async (data: SignInFormData) => {
	const { password, phoneNumberOrUsernameOrEmail } = data;

	const user = users.find((item) =>
		[item.phoneNumber, item.username, item.email].includes(
			phoneNumberOrUsernameOrEmail
		)
	);

	if (!user || user.password !== password) throw new ApiError('notFound');

	return { user, token: user.id };
};
