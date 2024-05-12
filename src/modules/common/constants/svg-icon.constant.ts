import { SvgIconProps } from '../types/svg-icon.type';

export const MapThicknessToIconStrokeWidth: Record<
  Required<SvgIconProps>['thickness'],
  number
> = {
  fat: 3,
  thin: 2,
  extraThin: 0,
};
