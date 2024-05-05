import { ApiError } from '@/data/error-code.data';
import { userStories } from '@/data/user-stories.data';
import { users } from '@/data/user.data';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { BasePaginationReqType } from '@/modules/common/types/base-pagination.req.type';
import { BasePaginationResType } from '@/modules/common/types/base-pagination.res.type';

export type GetListUserParams = {} & BasePaginationReqType;

export const getListUser = async (
	params: GetListUserParams
): Promise<BasePaginationResType<UserModel>> => {
	const { page = 1, size = 20 } = params;

	const firstIdx = page - 1 * size;
	const lastIdx = page * size;

	const userData = users.slice(firstIdx, lastIdx);
	const lastPage = Math.ceil(userStories.length / size);

	const hasNextPage = lastIdx < userData.length;

	return { data: userData, hasNextPage, currentPage: page, lastPage };
};

export type ChangeThemeParams = {
	token: string;
	theme: 'light' | 'dark' | 'system';
};

export const changeTheme = async (
	params: ChangeThemeParams
): Promise<ChangeThemeParams['theme']> => {
	const { theme, token } = params;

	const userId = parseInt(token);

	const user = users.find((item) => item.id === userId);
	if (!user) throw new ApiError('notFound');

	user.theme = theme;
	return theme;
};