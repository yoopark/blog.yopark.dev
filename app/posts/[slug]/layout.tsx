'use client';

import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { LyketProvider } from '@/providers/lyket-provider';

const PostLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <LyketProvider>
      <ScrollProgressBar />
      {children}
    </LyketProvider>
  );
};

export default PostLayout;
