import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
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

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <main className="mt-20 mb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
