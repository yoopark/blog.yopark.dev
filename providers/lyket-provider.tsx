import { type PropsWithChildren } from 'react';

import { Provider } from '@lyket/react';

import { getOrThrow } from '@/utils/env';

export const LyketProvider = ({ children }: PropsWithChildren) => {
  const apiKey = getOrThrow(process.env.NEXT_PUBLIC_LYKET_API_KEY);

  return <Provider apiKey={apiKey}>{children}</Provider>;
};
