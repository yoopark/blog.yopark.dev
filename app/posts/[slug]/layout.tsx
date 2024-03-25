'use client';

import { ScrollProgressBar } from '@/components/scroll-progress-bar__tmp';
import { LyketProvider } from '@/providers/lyket-provider__tmp';

const PostLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <LyketProvider>
      <ScrollProgressBar />
      {children}
    </LyketProvider>
  );
};

export default PostLayout;
