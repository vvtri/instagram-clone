import { UserStoryModel } from '../apis/user-story.api';

export const getPreviewImageFromUserStory = (
  userStory: Pick<UserStoryModel, 'media'>,
) => {
  const firstMedia = userStory.media[0];

  if (!firstMedia) return null;

  switch (firstMedia.type) {
    case 'image':
      return firstMedia.src;

    case 'video':
      return firstMedia.previewImgSrc;

    default:
      return null;
  }
};
