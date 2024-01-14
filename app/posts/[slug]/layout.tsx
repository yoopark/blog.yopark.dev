'use client';

import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { LyketProvider } from '@/providers/LyketProvider';

const PostLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <LyketProvider>
      <ScrollProgressBar />
      {children}
    </LyketProvider>
  );
};

export default PostLayout;
