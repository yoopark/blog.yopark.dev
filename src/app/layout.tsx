import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';

const suiteVariable = localFont({
  src: '../../public/fonts/SUITE-Variable.woff2',
});

const metadata: Metadata = {
  title: '티브 개발로그',
  description: '프론트엔드 개발자를 꿈꾸는 티브의 개발 블로그입니다 🍀',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '티브 개발로그',
    description: '프론트엔드 개발자를 꿈꾸는 티브의 개발 블로그입니다 🍀',
    url: 'https://blog.yopark.dev',
    images: 'https://blog.yopark.dev/images/og-image.jpeg',
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body className={suiteVariable.className}>
        <Header />
        <main className="mb-20 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
