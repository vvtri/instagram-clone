import InstaButton from '@/modules/common/components/utility/Button';
import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';
import { useTranslations } from 'next-intl';
import AuthLogo from '../AuthLogo';
import AuthSeparator from '../AuthSeparator';
import AuthBoxContainer from '../BoxContainer';
import GetTheApp from '../GetTheApp';
import SignInForm from './SignInForm';
import InstaLink from '@/modules/common/components/utility/InstaLink';

type SignInBoxProps = {
	className?: string;
	redirectUrl?: string;
};

export default function SignInBox({ className, redirectUrl }: SignInBoxProps) {
	const authT = useTranslations('Auth');

	return (
		<div className={className}>
			<AuthBoxContainer className='mt-3 pt-12 pb-6 space-y-5 '>
				<AuthLogo className='mt-4' />

				<SignInForm
					i18n={{
						password: authT('common.form.passwordInputLabel'),
						phoneNumberOrUsernameOrEmail: authT(
							'common.form.phoneNumberOrUsernameOrEmailInputLabel'
						),
						signInBtn: authT('signIn.button'),
					}}
					redirectUrl={redirectUrl}
				/>

				<AuthSeparator />

				<InstaButton variant='outline'>
					<InstaImgIcon className='mr-2' backgroundPosition='-414px -259px' />
					{authT('common.form.loginFbTitle')}
				</InstaButton>

				<InstaLink href=''>{authT('signIn.forgetPassword')}</InstaLink>
			</AuthBoxContainer>

			<AuthBoxContainer className='flex items-center justify-center flex-row py-6 mt-2'>
				{authT.rich('signIn.notHaveAccount', {
					Register: (chunk) => (
						<InstaLink href='/account/sign-up' size='md' className='ml-1'>
							{chunk}
						</InstaLink>
					),
				})}
			</AuthBoxContainer>

			<GetTheApp />
		</div>
	);
}
