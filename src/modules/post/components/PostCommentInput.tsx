import EmojiSvgIcon from '@/modules/common/components/icon/EmojiSvgIcon';
import InstaButton from '@/modules/common/components/utility/Button';
import EmojiPicker from '@/modules/common/components/utility/EmojiPicker';
import { useClickOutSide } from '@/modules/common/hooks/use-click-out-side.hook';
import { cn } from '@/utilities/tailwind/cn';
import React, { useRef, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

export default function PostCommentInput() {
	const [comment, setComment] = useState('');
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const emojiPickerRef = useRef<HTMLDivElement | null>(null);

	useClickOutSide(emojiPickerRef, () => {
		setShowEmojiPicker(false);
	});

	return (
		<div className='hidden text-text-primary dark:text-text-primaryDark p-1 pl-0 lg:flex mt-2 items-center'>
			<ReactTextareaAutosize
				minRows={1}
				maxRows={6}
				placeholder='Thêm bình luận'
				className='outline-none border-none flex-grow bg-transparent text-sm resize-none'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>

			<InstaButton
				variant='outline'
				className={cn('py-0 opacity-0 pointer-events-none invisible', {
					'opacity-100 pointer-events-auto visible': comment,
				})}
			>
				Đăng
			</InstaButton>

			<div className='relative cursor-pointer' ref={emojiPickerRef}>
				<div
					className='ml-1 p-1'
					onClick={() => setShowEmojiPicker((prev) => !prev)}
				>
					<EmojiSvgIcon width={14} height={14} className='flex-shrink-0' />
				</div>

				<EmojiPicker
					className={cn(
						'absolute bottom-full left-0 z-10 text-sm emoji-sm pb-3 bg-transparent transition opacity-0 pointer-events-none invisible',
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
