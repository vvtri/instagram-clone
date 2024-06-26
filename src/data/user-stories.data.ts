type UserStoriesData = {
  id: number;
  userId: number;
  createdAt: string;
  media: Array<
    | {
        type: 'video';
        src: string;
        previewImgSrc: string;
      }
    | {
        type: 'image';
        src: string;
        durationSeconds: number;
      }
  >;
}[];

export const userStories: UserStoriesData = [
  {
    id: 1,
    userId: 1,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/kienhoang-us1-v1.mp4',
        previewImgSrc: '/user-story/videos/kienhoang-us1-v1-preview.jpg',
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/loungu-us2-v1.mp4',
        previewImgSrc: '/user-story/videos/loungu-us2-v1-preview.jpg',
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/hungvanngo-us3-v1.mp4',
        previewImgSrc: '/user-story/videos/hungvanngo-us3-v1-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/hungvanngo-us3-v2.mp4',
        previewImgSrc: '/user-story/videos/hungvanngo-us3-v2-preview.jpg',
      },
    ],
  },
  {
    id: 4,
    userId: 4,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/ttruc__us4-v1.mp4',
        previewImgSrc: '/user-story/videos/ttruc__us4-v1-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/ttruc__-us4-v2.mp4',
        previewImgSrc: '/user-story/videos/ttruc__-us4-v2-preview.jpg',
      },
    ],
  },
  {
    id: 5,
    userId: 5,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/minhtu_nguyen-us5-v1.mp4',
        previewImgSrc: '/user-story/videos/minhtu_nguyen-us5-v1-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/minhtu_nguyen-us5-v2.mp4',
        previewImgSrc: '/user-story/videos/minhtu_nguyen-us5-v2-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/minhtu_nguyen-us5-v3.mp4',
        previewImgSrc: '/user-story/videos/minhtu_nguyen-us5-v3-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/minhtu_nguyen-us5-v4.mp4',
        previewImgSrc: '/user-story/videos/minhtu_nguyen-us5-v4-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/minhtu_nguyen-us5-v5.mp4',
        previewImgSrc: '/user-story/videos/minhtu_nguyen-us5-v5-preview.jpg',
      },
    ],
  },
  {
    id: 6,
    userId: 6,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'video',
        src: '/user-story/videos/nusr_et-us6-v1.mp4',
        previewImgSrc: '/user-story/videos/nusr_et-us6-v1-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/nusr_et-us6-v2.mp4',
        previewImgSrc: '/user-story/videos/nusr_et-us6-v2-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/nusr_et-us6-v3.mp4',
        previewImgSrc: '/user-story/videos/nusr_et-us6-v3-preview.jpg',
      },
      {
        type: 'video',
        src: '/user-story/videos/nusr_et-us6-v4.mp4',
        previewImgSrc: '/user-story/videos/nusr_et-us6-v4-preview.jpg',
      },
    ],
  },
  {
    id: 7,
    userId: 7,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'image',
        src: '/user-story/images/lf.low.g-us7-i1.jpg',
        durationSeconds: 10,
      },
    ],
  },
  {
    id: 8,
    userId: 8,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'image',
        src: '/user-story/images/loganpaul-us8-i1.jpg',
        durationSeconds: 10,
      },
    ],
  },
  {
    id: 9,
    userId: 9,
    createdAt: '2024-05-01T13:09:43.940Z',
    media: [
      {
        type: 'image',
        src: '/user-story/images/xeesoxee-us9-i1.jpg',
        durationSeconds: 10,
      },
    ],
  },
];
