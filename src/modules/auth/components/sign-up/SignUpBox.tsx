import InstaButton from '@/modules/common/components/utility/Button';
import InstaLink from '@/modules/common/components/InstaLink';
import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import { useTranslations } from 'next-intl';
import AuthLogo from '../AuthLogo';
import AuthBoxContainer from '../BoxContainer';
import GetTheApp from '../GetTheApp';
import SignUpForm from './SignUpForm';
import AuthSeparator from '../AuthSeparator';

type SignUpBoxProps = {};

export default function SignUpBox(props: SignUpBoxProps) {
	const authT = useTranslations('Auth');
	const commonT = useTranslations('Common');

	return (
		<div>
			<AuthBoxContainer className='mt-3 pt-12 pb-10 space-y-5'>
				<AuthLogo className='mt-4' />

				<h2 className='text-text-secondary text-base font-semibold '>
					{authT('signUp.title')}
				</h2>

				<InstaButton className='w-full'>
					<InstaImgIcon className='mr-2' backgroundPosition='-414px -300px' />
					{authT('common.form.loginFbTitle')}
				</InstaButton>

				<AuthSeparator />

				<SignUpForm
					i18n={{
						contactUploadingWarning: authT.rich(
							'common.form.contactUploadingWarning',
							{ LearnMore: (chunk) => <InstaLink href='#'>{chunk}</InstaLink> }
						),
						signUpPolicy: authT.rich('common.form.signUpPolicy', {
							Term: (chunk) => <InstaLink href='#'>{chunk}</InstaLink>,
							PrivacyPolicy: (chunk) => <InstaLink href='#'>{chunk}</InstaLink>,
							CookiesPolicy: (chunk) => <InstaLink href='#'>{chunk}</InstaLink>,
						}),
						fullName: authT('common.form.fullNameInputLabel'),
						password: authT('common.form.passwordInputLabel'),
						phoneNumberOrEmail: authT(
							'common.form.phoneNumberOrEmailInputLabel'
						),
						signUpBtn: authT('signUp.button'),
						username: authT('common.form.usernameInputLabel'),
					}}
				/>
			</AuthBoxContainer>

			<AuthBoxContainer className='flex items-center justify-center flex-row py-6 mt-2'>
				{authT.rich('signUp.haveAccount', {
					LogIn: (chunk) => (
						<InstaLink href='/account/sign-in' size='md' className='ml-1'>
							{chunk}
						</InstaLink>
					),
				})}
			</AuthBoxContainer>

			<GetTheApp />
		</div>
	);
}
