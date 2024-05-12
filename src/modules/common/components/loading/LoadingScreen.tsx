import { cn } from '@/utilities/tailwind/cn';
import Image from 'next/image';

type LoadingScreenProps = {
  className?: string;
  fullScreen?: boolean;
};

export default function LoadingScreen(props: LoadingScreenProps) {
  const { className, fullScreen = true } = props;

  return (
    <main
      className={cn(
        'w-screen h-screen flex justify-center items-center flex-col fixed inset-0 z-loading bg-white',
        { 'w-full flex relative': !fullScreen },
        className,
      )}
    >
      <Image
        width="80"
        height="80"
        src="/loading/auth-loading-icon-logo.png"
        className=""
        alt="Loading icon"
        priority
      />

      <Image
        width="72"
        height="37"
        src="/loading/auth-loading-icon-meta.png"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        alt="Loading icon"
        priority
      />
    </main>
  );
}
