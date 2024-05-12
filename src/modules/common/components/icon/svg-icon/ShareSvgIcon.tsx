import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function ShareSvgIcon(props: SvgIconProps) {
  const { thickness = 'thin', width = 24, height = 24, ...rest } = props;

  return (
    <svg
      aria-label="Chia sẻ bài viết"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...rest}
    >
      <title>Chia sẻ bài viết</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
}
