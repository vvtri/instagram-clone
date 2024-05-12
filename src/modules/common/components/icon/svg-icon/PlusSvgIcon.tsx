import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function PlusSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 44,
    height = 44,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Biểu tượng dấu cộng"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...rest}
    >
      <title>Biểu tượng dấu cộng</title>
      <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
    </svg>
  );
}
