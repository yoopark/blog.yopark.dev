'use client';

import { type PropsWithChildren } from 'react';

import ScrollProgressBar from '@/components/scroll-progress-bar';
import { LyketProvider } from '@/providers/lyket-provider';

const PostLayout = ({ children }: PropsWithChildren) => {
  return (
    <LyketProvider>
      <ScrollProgressBar />
      {children}
    </LyketProvider>
  );
};

export default PostLayout;
