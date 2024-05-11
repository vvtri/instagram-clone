import NotAuthGuard from '@/modules/auth/components/guard/NotAuthGuard';
import Footer from '@/modules/common/components/footer/Footer';
import Script from 'next/script';
import React, { PropsWithChildren } from 'react';

export default function AccountLayout({ children }: PropsWithChildren) {
  return (
    <NotAuthGuard>
      <Script src="https://unpkg.com/detect-autofill@1.1.4/dist/detect-autofill.js" />

      {children}
      <Footer />
    </NotAuthGuard>
  );
}
