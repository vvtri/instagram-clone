'use client';
import EmojiSvgIcon from '@/modules/common/components/icon/svg-icon/EmojiSvgIcon';
import EmojiPicker from '@/modules/common/components/utility/EmojiPicker';
import InstaButton from '@/modules/common/components/utility/InstaButton';
import { useClickOutSide } from '@/modules/common/hooks/use-click-out-side.hook';
import { useToast } from '@/modules/common/hooks/use-toast.hook';
import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

export default function PostCardCommentInput() {
  const [comment, setComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('Client');
  const { warning } = useToast();

  useClickOutSide(emojiPickerRef, () => {
    setShowEmojiPicker(false);
  });

  return (
    <div className="hidden text-text-primary p-1 pl-0 lg:flex mt-2 items-center">
      <ReactTextareaAutosize
        minRows={1}
        maxRows={6}
        placeholder={t('post.common.addComment')}
        className="outline-none border-none flex-grow bg-transparent text-sm resize-none placeholder:text-text-secondary"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <InstaButton
        variant="outline"
        className={cn('py-0 opacity-0 pointer-events-none invisible', {
          'opacity-100 pointer-events-auto visible': comment,
        })}
        onClick={() => warning(t('common.error.functionIsNotImplemented'))}
      >
        {t('post.common.post')}
      </InstaButton>

      <div className="relative cursor-pointer" ref={emojiPickerRef}>
        <div
          className="ml-1 p-1"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          <EmojiSvgIcon width={14} height={14} className="flex-shrink-0" />
        </div>

        <EmojiPicker
          className={cn(
            'absolute bottom-full left-0 z-float text-sm emoji-sm pb-3 bg-transparent transition opacity-0 pointer-events-none invisible',
            { 'opacity-100 pointer-events-auto visible': showEmojiPicker },
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
