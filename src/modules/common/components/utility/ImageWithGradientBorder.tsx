import { cn } from '@/utilities/tailwind/cn';
import Image, { ImageProps } from 'next/image';

type ImageWithGradientBorderProps = {
  imageUrl: string;
  length: number;
  className?: string;
  imgProps?: Partial<ImageProps>;
};

export default function ImageWithGradientBorder(
  props: ImageWithGradientBorderProps,
) {
  const { imageUrl, className, length, imgProps } = props;
  const containerLength = length + 10;

  return (
    <div
      className={cn(
        `aspect-square relative rounded-full overflow-hidden flex items-center justify-center`,
        className,
      )}
      style={{ width: containerLength }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-float bg-[linear-gradient(to_right_top,#FFF1BD,#D921CC)] rounded-full "
      />

      <Image
        src={imageUrl}
        width={length}
        height={length}
        alt="UserStory Image"
        className="rounded-full outline-[3px] outline-bg-primary outline"
        priority
        {...imgProps}
      />
    </div>
  );
}
