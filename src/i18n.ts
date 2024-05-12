import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'vi'];

export default getRequestConfig(async (props) => {
  const { locale } = props;

  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      Auth: (await import(`../messages/${locale}/auth.json`)).default,
      Client: (await import(`../messages/${locale}/client.json`)).default,
      Common: (await import(`../messages/${locale}/common.json`)).default,
      User: (await import(`../messages/${locale}/user.json`)).default,
      UserStory: (await import(`../messages/${locale}/user-story.json`))
        .default,
    },
  };
});
