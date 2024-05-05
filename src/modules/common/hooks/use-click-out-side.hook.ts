import { MutableRefObject, Ref, useEffect } from 'react';

export const useClickOutSide = (
	ref: MutableRefObject<HTMLElement | null | undefined>,
	handler: () => any,
) => {
	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			const element = ref.current;
			if (!element) return;

			if (element.contains(e.target as Node)) return;
			handler();
		};

		document.addEventListener('click', clickHandler);

		return () => {
			document.removeEventListener('click', clickHandler);
		};
	}, [ref, handler]);
};
