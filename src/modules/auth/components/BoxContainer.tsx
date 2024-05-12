'use client';
import { cn } from '@/utilities/tailwind/cn';
import { PropsWithChildren } from 'react';

type BoxContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function AuthBoxContainer({
  children,
  className,
}: BoxContainerProps) {
  return (
    <section className="w-full">
      <div
        className={cn(
          'mx-auto flex flex-col items-center w-[350px] border-btn-tertiaryBorder border px-10',
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
