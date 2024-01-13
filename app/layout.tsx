import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'blog.yopark.dev',
  description: '프론트엔드 개발자를 꿈꾸는 박용준의 개발 블로그입니다 🙇‍♂️',
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
