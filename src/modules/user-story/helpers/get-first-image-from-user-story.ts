import { UserStoryModel } from '../apis/user-story.api';

export const getFirstImageFromUserStory = async (
  media: UserStoryModel['media'],
) => {
  const firstMedia = media?.[0];
  if (!firstMedia) throw new Error('Media is empty');

  if (firstMedia.type === 'image') return firstMedia.src;

  return await captureFirstFrameFromVideo(firstMedia.src);
};

export const captureFirstFrameFromVideo = (
  videoUrl: string,
): Promise<string> => {
  return new Promise<string>((resolve) => {
    const canvas = document.createElement('canvas');
    const video = document.createElement('video');
    const source = document.createElement('source');
    const context = canvas.getContext('2d');

    video.style.display = 'none';
    canvas.style.display = 'none';

    source.setAttribute('src', videoUrl);
    video.setAttribute('crossorigin', 'anonymous');
    video.setAttribute('preload', 'metadata');

    video.appendChild(source);
    document.body.appendChild(canvas);
    document.body.appendChild(video);

    if (!context) {
      return;
    }

    video.currentTime = 0.5;
    video.load();

    video.addEventListener('loadedmetadata', function () {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    });

    video.addEventListener('loadeddata', function () {
      setTimeout(() => {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        canvas.toBlob((blob) => {
          if (!blob) return;

          const imageUrl = URL.createObjectURL(blob);
          resolve(imageUrl);

          video.remove();
          canvas.remove();
        });
      }, 2000);
    });
  });
};
