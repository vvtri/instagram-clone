type GenImageSizeParams = {
	default: string;
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
};

export const genImageSizesProp = (params: GenImageSizeParams) => {
	const { default: _default, lg, md, sm, xl } = params;

	let result = _default;

	if (sm) {
		result += `, (min-width: 640px) ${sm}`;
	}

	if (md) {
		result += `, (min-width: 768px) ${md}`;
	}

	if (lg) {
		result += `, (min-width: 1024px) ${lg}`;
	}

	if (xl) {
		result += `, (min-width: 1280px) ${lg}`;
	}

	return result;
};
