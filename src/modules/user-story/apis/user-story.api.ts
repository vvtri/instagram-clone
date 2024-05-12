import { ApiError } from '@/data/error-code.data';
import { userStories } from '@/data/user-stories.data';
import { users } from '@/data/user.data';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { BasePaginationReqType } from '@/modules/common/types/base-pagination.req.type';
import { BasePaginationResType } from '@/modules/common/types/base-pagination.res.type';

export type UserStoryModel = (typeof userStories)[number] & {
  user: UserModel;
};

export type GetListUserStoryParams = {} & BasePaginationReqType;

export const getListUserStory = async (
  params: GetListUserStoryParams,
): Promise<BasePaginationResType<UserStoryModel>> => {
  const { page = 1, size = 20 } = params;

  const firstIdx = (page - 1) * size;
  const lastIdx = page * size;

  const userStoryData = userStories.slice(firstIdx, lastIdx);
  const lastPage = Math.ceil(userStories.length / size);

  const result = userStoryData.map<UserStoryModel>((item) => ({
    ...item,
    user: users.find((user) => user.id === item.userId) as UserModel,
  }));

  const hasNextPage = lastIdx < userStories.length;

  return { data: result, hasNextPage, currentPage: page, lastPage };
};

export type GetDetailUserStoryParams = {
  userStoryId: number;
};

export const getDetailUserStory = async (
  params: GetDetailUserStoryParams,
): Promise<UserStoryModel> => {
  const { userStoryId } = params;

  const userStory = userStories.find((item) => item.id === userStoryId);
  if (!userStory) throw new ApiError('notFound');

  const user = users.find((item) => item.id === userStory.userId)!;

  return { ...userStory, user };
};
