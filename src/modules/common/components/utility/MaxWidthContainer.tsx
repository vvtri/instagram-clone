import { cn } from '@/utilities/tailwind/cn';
import { PropsWithChildren } from 'react';

type MaxWidthContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <div
      className={cn(
        'w-full min-h-screen flex flex-col pb-12 lg:flex lg:pb-0 lg:pl-[72px] xl:pl-[244px] overflow-x-hidden',
        className,
      )}
    >
      {children}
    </div>
  );
}
