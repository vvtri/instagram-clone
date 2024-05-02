import { ApiError } from '@/data/error-code.data';
import { users } from '@/data/user.data';
import { comments } from '@/data/comment.data';

export type CommentModel = (typeof comments)[number];

type GetListCommentParams = {
	page: number;
	size: number;
	postId: number;
};

export const getListComment = async (params: GetListCommentParams) => {
	const { page = 1, size = 20, postId } = params;

	const firstIdx = page - 1 * size;
	const lastIdx = page * size;

	const commentData = comments
		.filter((item) => item.postId === postId)
		.slice(firstIdx, lastIdx);

	const hasNextPage = lastIdx < commentData.length;

	return { comments: commentData, hasNextPage };
};
