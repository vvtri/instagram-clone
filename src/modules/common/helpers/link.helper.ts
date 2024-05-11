export const getHomeLink = () => '/'

export const getUserProfileLink = (username: string) => {
	return `/${username}`;
};

export const getPostDetailLink = (postId: number) => {
	return `/p/${postId}`;
};

export const getPostCommentLink = (postId: number) => {
	return `/p/${postId}/comments`;
};
