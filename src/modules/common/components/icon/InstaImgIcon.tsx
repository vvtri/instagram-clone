import { cn } from '@/utilities/tailwind/cn';

type InstagramIconProps = {
  url?: string;
  backgroundPosition: string;
  backgroundSize?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function InstaImgIcon(props: InstagramIconProps) {
  const {
    backgroundPosition,
    backgroundSize,
    height = 16,
    url = 'https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png',
    width = 16,
    className,
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url('${url}')`,
        width,
        height,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
        backgroundSize,
      }}
      className={cn(className)}
    ></div>
  );
}
