import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function MenuSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Cài đặt"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...rest}
    >
      <title>Cài đặt</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="4"
        y2="4"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="12"
        y2="12"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="20"
        y2="20"
      ></line>
    </svg>
  );
}
