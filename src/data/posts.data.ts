import { comments } from './comment.data';

export const posts = [
	{
		id: 1,
		userId: 1,
		title: 'Mừng cục vàng 8 tuổi',
		createdAt: '2024-04-26T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p1-img1.jpg',
			'/post/kienhoang254-p1-img2.jpg',
			'/post/kienhoang254-p1-img3.jpg',
			'/post/kienhoang254-p1-img4.jpg',
			'/post/kienhoang254-p1-img5.jpg',
			'/post/kienhoang254-p1-img6.jpg',
			'/post/kienhoang254-p1-img7.jpg',
		],
		imageRatio: '755/755',
		likeAmount: 784962,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 1 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 2,
		userId: 2,
		images: ['/post/loungu-p1-img1.jpg', '/post/loungu-p1-img2.jpg'],
		title: '🎀💕🐷🌷🐽 @bigteam_ent23',
		createdAt: '2024-05-01T13:09:43.940Z',
		imageRatio: '604/755',
		likeAmount: 186,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 3,
		userId: 1,
		title: '3️⃣3️⃣',
		createdAt: '2024-04-25T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p2-img1.jpg',
			'/post/kienhoang254-p2-img2.jpg',
			'/post/kienhoang254-p2-img3.jpg',
			'/post/kienhoang254-p2-img4.jpg',
			'/post/kienhoang254-p2-img5.jpg',
		],
		imageRatio: '775/775',
		likeAmount: 1237,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},
	{
		id: 4,
		userId: 1,
		title: 'Mừng cục vàng 8 tuổi',
		createdAt: '2024-04-26T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p1-img1.jpg',
			'/post/kienhoang254-p1-img2.jpg',
			'/post/kienhoang254-p1-img3.jpg',
			'/post/kienhoang254-p1-img4.jpg',
			'/post/kienhoang254-p1-img5.jpg',
			'/post/kienhoang254-p1-img6.jpg',
			'/post/kienhoang254-p1-img7.jpg',
		],
		imageRatio: '755/755',
		likeAmount: 784962,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 1 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 5,
		userId: 2,
		images: ['/post/loungu-p1-img1.jpg', '/post/loungu-p1-img2.jpg'],
		title: '🎀💕🐷🌷🐽 @bigteam_ent23',
		createdAt: '2024-05-01T13:09:43.940Z',
		imageRatio: '604/755',
		likeAmount: 186,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 6,
		userId: 1,
		title: '3️⃣3️⃣',
		createdAt: '2024-04-25T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p2-img1.jpg',
			'/post/kienhoang254-p2-img2.jpg',
			'/post/kienhoang254-p2-img3.jpg',
			'/post/kienhoang254-p2-img4.jpg',
			'/post/kienhoang254-p2-img5.jpg',
		],
		imageRatio: '775/775',
		likeAmount: 1237,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},
	{
		id: 7,
		userId: 1,
		title: 'Mừng cục vàng 8 tuổi',
		createdAt: '2024-04-26T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p1-img1.jpg',
			'/post/kienhoang254-p1-img2.jpg',
			'/post/kienhoang254-p1-img3.jpg',
			'/post/kienhoang254-p1-img4.jpg',
			'/post/kienhoang254-p1-img5.jpg',
			'/post/kienhoang254-p1-img6.jpg',
			'/post/kienhoang254-p1-img7.jpg',
		],
		imageRatio: '755/755',
		likeAmount: 784962,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 1 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 8,
		userId: 2,
		images: ['/post/loungu-p1-img1.jpg', '/post/loungu-p1-img2.jpg'],
		title: '🎀💕🐷🌷🐽 @bigteam_ent23',
		createdAt: '2024-05-01T13:09:43.940Z',
		imageRatio: '604/755',
		likeAmount: 186,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 9,
		userId: 1,
		title: '3️⃣3️⃣',
		createdAt: '2024-04-25T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p2-img1.jpg',
			'/post/kienhoang254-p2-img2.jpg',
			'/post/kienhoang254-p2-img3.jpg',
			'/post/kienhoang254-p2-img4.jpg',
			'/post/kienhoang254-p2-img5.jpg',
		],
		imageRatio: '775/775',
		likeAmount: 1237,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},
	{
		id: 10,
		userId: 1,
		title: 'Mừng cục vàng 8 tuổi',
		createdAt: '2024-04-26T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p1-img1.jpg',
			'/post/kienhoang254-p1-img2.jpg',
			'/post/kienhoang254-p1-img3.jpg',
			'/post/kienhoang254-p1-img4.jpg',
			'/post/kienhoang254-p1-img5.jpg',
			'/post/kienhoang254-p1-img6.jpg',
			'/post/kienhoang254-p1-img7.jpg',
		],
		imageRatio: '755/755',
		likeAmount: 784962,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 1 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 11,
		userId: 2,
		images: ['/post/loungu-p1-img1.jpg', '/post/loungu-p1-img2.jpg'],
		title: '🎀💕🐷🌷🐽 @bigteam_ent23',
		createdAt: '2024-05-01T13:09:43.940Z',
		imageRatio: '604/755',
		likeAmount: 186,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 12,
		userId: 1,
		title: '3️⃣3️⃣',
		createdAt: '2024-04-25T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p2-img1.jpg',
			'/post/kienhoang254-p2-img2.jpg',
			'/post/kienhoang254-p2-img3.jpg',
			'/post/kienhoang254-p2-img4.jpg',
			'/post/kienhoang254-p2-img5.jpg',
		],
		imageRatio: '775/775',
		likeAmount: 1237,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},
	{
		id: 13,
		userId: 1,
		title: 'Mừng cục vàng 8 tuổi',
		createdAt: '2024-04-26T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p1-img1.jpg',
			'/post/kienhoang254-p1-img2.jpg',
			'/post/kienhoang254-p1-img3.jpg',
			'/post/kienhoang254-p1-img4.jpg',
			'/post/kienhoang254-p1-img5.jpg',
			'/post/kienhoang254-p1-img6.jpg',
			'/post/kienhoang254-p1-img7.jpg',
		],
		imageRatio: '755/755',
		likeAmount: 784962,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 1 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 14,
		userId: 2,
		images: ['/post/loungu-p1-img1.jpg', '/post/loungu-p1-img2.jpg'],
		title: '🎀💕🐷🌷🐽 @bigteam_ent23',
		createdAt: '2024-05-01T13:09:43.940Z',
		imageRatio: '604/755',
		likeAmount: 186,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},

	{
		id: 15,
		userId: 1,
		title: '3️⃣3️⃣',
		createdAt: '2024-04-25T13:09:43.940Z',
		images: [
			'/post/kienhoang254-p2-img1.jpg',
			'/post/kienhoang254-p2-img2.jpg',
			'/post/kienhoang254-p2-img3.jpg',
			'/post/kienhoang254-p2-img4.jpg',
			'/post/kienhoang254-p2-img5.jpg',
		],
		imageRatio: '775/775',
		likeAmount: 1237,
		commentAmount: comments.reduce(
			(accum, item) => (item.postId === 2 ? accum + 1 : accum),
			0
		),
	},
];
