import { userStories } from '@/data/user-stories.data';

export type UserStoryModel = (typeof userStories)[number];

type GetListCommentParams = {
	page: number;
	size: number;
	postId: number;
};

export const getListUserStory = async (params: GetListCommentParams) => {
	const { page = 1, size = 20 } = params;

	const firstIdx = page - 1 * size;
	const lastIdx = page * size;

	const userStoryData = userStories.slice(firstIdx, lastIdx);

	const hasNextPage = lastIdx < userStoryData.length;

	return { userStories: userStoryData, hasNextPage };
};
