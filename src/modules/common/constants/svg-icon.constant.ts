export type SvgIconProps = {
	thickness?: 'thin' | 'fat';
};

export const MapThicknessToIconStrokeWidth: Record<
	Required<SvgIconProps>['thickness'],
	number
> = {
	fat: 1,
	thin: 5,
};
