import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'vi'];

export default getRequestConfig(async (props ) => {
  const {locale} = props

  console.log('props', props)
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
