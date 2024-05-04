'use client';

import React, { forwardRef } from 'react';
import { useLocale } from 'next-intl';
import { useAuth } from '@/modules/auth/hooks/use-auth.hook';
import EmojiPickerReact, {
	EmojiStyle,
	Theme,
	PickerProps,
} from 'emoji-picker-react';
import { useTheme } from 'next-themes';
import { cn } from '@/utilities/tailwind/cn';

type EmojiPickerProps = {
	className?: string;
	emojiProps?: PickerProps;
};

const EmojiPicker = forwardRef<HTMLDivElement, EmojiPickerProps>(
	(props, ref) => {
		const { resolvedTheme } = useTheme();

		const { className, emojiProps } = props;
		const { user } = useAuth();

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
	}
);

export default EmojiPicker;
