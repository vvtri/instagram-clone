import Footer from '@/modules/common/components/footer/Footer';
import ScreenshotBox from './ScreenshotBox';
import SignInBox from './sign-in/SignInBox';

type LoginWithScreenshot = {
  redirectUrl?: string;
};

export default function LoginWithScreenshot({
  redirectUrl,
}: LoginWithScreenshot) {
  return (
    <>
      <main className="pt-12 mx-auto">
        <div className="flex items-center justify-center">
          <ScreenshotBox className="hidden lg:block" />

          <SignInBox
            className="flex items-center flex-col"
            redirectUrl={redirectUrl}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
