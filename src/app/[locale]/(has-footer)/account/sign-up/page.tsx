import SignUpBox from '@/modules/auth/components/sign-up/SignUpBox';
import { useTranslations } from 'next-intl';

export default function SignUpPage() {
	const t = useTranslations('Auth');

	return (
		<main className='mb-20'>
			<SignUpBox />;
		</main>
	);
}
