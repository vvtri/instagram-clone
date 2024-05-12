import { MapThicknessToIconStrokeWidth } from '@/modules/common/constants/svg-icon.constant';
import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function SearchSvgIcon(props: SvgIconProps) {
  const { thickness = 'thin', width = 24, height = 24, ...rest } = props;

  return (
    <svg
      aria-label="Tìm kiếm"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...rest}
    >
      <title>Tìm kiếm</title>
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={MapThicknessToIconStrokeWidth[thickness]}
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={MapThicknessToIconStrokeWidth[thickness]}
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
}
