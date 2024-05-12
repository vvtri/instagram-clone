import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function EmojiSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      aria-label="Biểu tượng cảm xúc"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...rest}
    >
      <title>Biểu tượng cảm xúc</title>
      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
    </svg>
  );
}
