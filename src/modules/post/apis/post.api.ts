import { ApiError } from '@/data/error-code.data';
import { posts } from '@/data/posts.data';
import { users } from '@/data/user.data';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { BasePaginationReqType } from '@/modules/common/types/base-pagination.req.type';
import { BasePaginationResType } from '@/modules/common/types/base-pagination.res.type';

export type PostModel = (typeof posts)[number] & {
  user: UserModel;
};

export type GetListPostParams = {} & BasePaginationReqType;

export const getListPost = async (
  params: GetListPostParams,
): Promise<BasePaginationResType<PostModel>> => {
  const { page = 1, size = 20 } = params;

  const firstIdx = (page - 1) * size;
  const lastIdx = page * size;

  const postData = posts.slice(firstIdx, lastIdx);
  const lastPage = Math.ceil(posts.length / size);

  const result = postData.map<PostModel>((item) => ({
    ...item,
    user: users.find((user) => user.id === item.userId) as UserModel,
  }));

  const hasNextPage = lastIdx < posts.length;

  return { data: result, hasNextPage, lastPage, currentPage: page };
};

export type GetDetailPostParams = {
  postId: number;
};

export const getDetailPost = async (
  params: GetDetailPostParams,
): Promise<PostModel> => {
  const { postId } = params;

  const post = posts.find((item) => item.id === postId);

  if (!post) throw new ApiError('notFound');

  const user = users.find((item) => item.id === post.userId)!;

  return { ...post, user };
};
