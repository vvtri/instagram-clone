'use client';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import EmojiPicker from '@/modules/common/components/utility/EmojiPicker';
import { useClickOutSide } from '@/modules/common/hooks/use-click-out-side.hook';
import { cn } from '@/utilities/tailwind/cn';
import React, { useRef, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import EmojiSvgIcon from '@/modules/common/components/icon/svg-icon/EmojiSvgIcon';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { users } from '@/data/user.data';
import { useToast } from '@/modules/common/hooks/use-toast.hook';

type PostDetailCommentInputProps = {
	className?: string;
};

export default function PostDetailCommentInput(
	props: PostDetailCommentInputProps
) {
	const { className } = props;

	const [comment, setComment] = useState('');
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const emojiPickerRef = useRef<HTMLDivElement | null>(null);
	const t = useTranslations('Client');
	const { warning } = useToast();

	useClickOutSide(emojiPickerRef, () => {
		setShowEmojiPicker(false);
	});

	return (
		<div
			className={cn(
				'hidden text-text-primary p-1 pl-0 lg:flex mt-2 items-center',
				className
			)}
		>
			<div className='relative w-[32px] aspect-square overflow-hidden mr-2 rounded-full'>
				<Image src={users[0].avt} fill alt='' className='object-cover' />
			</div>

			<ReactTextareaAutosize
				minRows={1}
				maxRows={6}
				placeholder={t('post.common.addComment')}
				className='outline-none border-none flex-grow bg-transparent text-sm resize-none'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>

			<InstaButton
				variant='outline'
				className={cn(
					'py-0 opacity-0 pointer-events-none invisible capitalize',
					{
						'opacity-100 pointer-events-auto visible': comment,
					}
				)}
				onClick={() => warning(t('common.error.functionIsNotImplemented'))}
			>
				{t('post.common.post')}
			</InstaButton>

			<div className='relative cursor-pointer' ref={emojiPickerRef}>
				<div
					className='ml-1 p-1'
					onClick={() => setShowEmojiPicker((prev) => !prev)}
				>
					<EmojiSvgIcon width={24} height={24} className='flex-shrink-0' />
				</div>

				<EmojiPicker
					className={cn(
						'absolute bottom-full left-0 z-float text-sm emoji-sm pb-3 bg-transparent transition opacity-0 pointer-events-none invisible',
						{ 'opacity-100 pointer-events-auto visible': showEmojiPicker }
					)}
					emojiProps={{
						searchDisabled: true,
						skinTonesDisabled: true,
						previewConfig: { showPreview: false },
						lazyLoadEmojis: true,
						onEmojiClick: ({ emoji }) => setComment((prev) => prev + emoji),
					}}
				/>
			</div>
		</div>
	);
}
