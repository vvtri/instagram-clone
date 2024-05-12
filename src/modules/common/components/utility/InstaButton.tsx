import { cn } from '@/utilities/tailwind/cn';
import React, { PropsWithChildren } from 'react';

type InstaButtonProps = PropsWithChildren<
  React.JSX.IntrinsicElements['button'] & {
    variant?: 'fill' | 'outline';
    colorSchema?: 'blue' | 'gray';
  }
>;

export default function InstaButton(props: InstaButtonProps) {
  const {
    children,
    className,
    variant = 'fill',
    colorSchema = 'blue',
    ...rest
  } = props;

  return (
    <button
      className={cn(
        'flex items-center justify-center py-2 px-4 text-sm w-auto font-semibold cursor-pointer transition rounded-lg',
        {
          'bg-btn-primary hover:bg-btn-primaryHover text-white':
            variant === 'fill' && colorSchema === 'blue',
          'text-btn-primary bg-transparent dark:hover:text-btn-primaryHover':
            variant === 'outline' && colorSchema === 'blue',

          'bg-btn-secondary hover:bg-btn-secondaryHover':
            variant === 'fill' && colorSchema === 'gray',
          'text-btn-secondary bg-transparent':
            variant === 'outline' && colorSchema === 'gray',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
