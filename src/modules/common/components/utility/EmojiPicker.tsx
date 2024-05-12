'use client';

import { cn } from '@/utilities/tailwind/cn';
import EmojiPickerReact, {
  EmojiStyle,
  PickerProps,
  Theme,
} from 'emoji-picker-react';
import { useTheme } from 'next-themes';
import { forwardRef } from 'react';

type EmojiPickerProps = {
  className?: string;
  emojiProps?: PickerProps;
};

const EmojiPicker = forwardRef<HTMLDivElement, EmojiPickerProps>(
  (props, ref) => {
    const { resolvedTheme } = useTheme();
    const { className, emojiProps } = props;

    return (
      <div className={(cn('font-["Noto_Color_Emoji"]'), className)} ref={ref}>
        <EmojiPickerReact
          emojiStyle={EmojiStyle.NATIVE}
          theme={resolvedTheme === 'light' ? Theme.LIGHT : Theme.DARK}
          height={350}
          {...emojiProps}
        />
      </div>
    );
  },
);

export default EmojiPicker;
