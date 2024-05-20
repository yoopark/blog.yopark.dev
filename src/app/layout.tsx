import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { type PropsWithChildren } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';

const wantedSans = localFont({
  src: '../../public/fonts/WantedSansVariable.woff2',
});

const metadata: Metadata = {
  title: 'Yopark Devlog',
  description: '프론트엔드 개발자를 꿈꾸는 박용준의 개발 블로그입니다 🙇‍♂️',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: 'Yopark Devlog',
    description: '프론트엔드 개발자를 꿈꾸는 박용준의 개발 블로그입니다 🙇‍♂️',
    url: 'https://blog.yopark.dev',
    images: 'https://blog.yopark.dev/images/og-image.jpeg',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body className={wantedSans.className}>
        <Header />
        <main className="mb-20 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
