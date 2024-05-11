import { ApiError } from '@/data/error-code.data';
import { users } from '@/data/user.data';
import { comments } from '@/data/comment.data';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { BasePaginationResType } from '@/modules/common/types/base-pagination.res.type';
import { BasePaginationReqType } from '@/modules/common/types/base-pagination.req.type';

export type CommentModel = (typeof comments)[number] & {
	user: UserModel;
};

export type GetListCommentParams = BasePaginationReqType & {
	postId: number;
};

export const getListComment = async (
	params: GetListCommentParams
): Promise<BasePaginationResType<CommentModel>> => {
	const { page = 1, size = 20, postId } = params;

	const firstIdx = (page - 1) * size;
	const lastIdx = page * size;
	const lastPage = Math.ceil(comments.length / size);

	await new Promise((res) =>
		setTimeout(() => {
			res('a');
		}, 3000)
	);

	const commentSource = comments.filter((item) => item.postId === postId);

	const commentData = commentSource.slice(firstIdx, lastIdx);

	const result: CommentModel[] = commentData.map((item) => ({
		...item,
		user: users.find((user) => user.id === item.userId)!,
	}));

	const hasNextPage = lastIdx < commentSource.length;

	return { data: result, hasNextPage, currentPage: page, lastPage };
};
