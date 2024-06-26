import { SvgIconProps } from '@/modules/common/types/svg-icon.type';

export default function LanguageSvgIcon(props: SvgIconProps) {
  const {
    thickness = 'thin',
    variant = 'outline',
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-labelledby="languageIconTitle"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="currentColor"
      height={height}
      width={width}
      {...rest}
    >
      <title id="languageIconTitle">Language</title>
      <circle cx="12" cy="12" r="10" />
      <path
        strokeLinecap="round"
        d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
      />
      <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
    </svg>
  );
}
