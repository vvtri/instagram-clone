import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function BookmarkSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Lưu"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...rest}
    >
      <title>Lưu</title>
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
}
