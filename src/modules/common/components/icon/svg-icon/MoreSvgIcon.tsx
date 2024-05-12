import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function MoreSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Tùy chọn khác"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      height={width}
      width={height}
      {...rest}
    >
      <title>Tùy chọn khác</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
}
