import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function PauseSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Pause"
      fill="currentColor"
      role="img"
      viewBox="0 0 48 48"
      height={width}
      width={height}
      {...rest}
    >
      <title>Pause</title>
      <path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"></path>
    </svg>
  );
}
