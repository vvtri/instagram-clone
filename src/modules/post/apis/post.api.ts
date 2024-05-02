import { ApiError } from '@/data/error-code.data';
import { users } from '@/data/user.data';
import { posts } from '@/data/posts.data';

export type PostModel = (typeof posts)[number];

export const getListPost = async (page: number = 1, size: number = 20) => {
	const firstIdx = page - 1 * size;
	const lastIdx = page * size;

	const postData = posts.slice(firstIdx, lastIdx);

	const hasNextPage = lastIdx < posts.length;

	return { posts: postData, hasNextPage };
};
