import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cn } from '@/utils/cn';
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
      <Header />
      <body className={cn(pretendard.className, 'mt-20 mb-10')}>
        {children}
      </body>
      <Footer />
    </html>
  );
};

export default RootLayout;
