import { cn } from '@/utilities/tailwind/cn';
import Skeleton from 'react-loading-skeleton';

type BoxSkeletonProps = {
  className?: string;
  containerClassName?: string;
};

export default function BoxSkeleton(props: BoxSkeletonProps) {
  const { className, containerClassName } = props;

  return (
    <Skeleton
      containerClassName={cn(
        'flex w-full h-full items-center',
        containerClassName,
      )}
      className={cn('h-full w-full', className)}
      enableAnimation
    />
  );
}
