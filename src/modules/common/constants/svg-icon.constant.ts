export type SvgIconProps = {
	thickness?: 'thin' | 'fat';
};

export const MapThicknessToIconStrokeWidth: Record<
	Required<SvgIconProps>['thickness'],
	number
> = {
	fat: 3,
	thin: 2,
};
