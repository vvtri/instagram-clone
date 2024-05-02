import { ApiError } from '@/data/error-code.data';
import { users } from '@/data/user.data';
import { SignInFormData } from '../schema/sign-in.scheme';

export type UserModel = (typeof users)[number];

const mapTokenToUserId: Record<string, number> = {
	abc: 1,
	def: 2,
};

export const getCurrentUser = async (token: string) => {
	const userId = mapTokenToUserId[token];


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

	const hashedPwd = password; // fake hash

	if (!user || user.password !== hashedPwd) throw new ApiError('notFound');

	return {
		user,
		token: Object.entries(mapTokenToUserId).find(
			(key, value) => value === user.id
		)?.[0],
	};
};
