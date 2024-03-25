import { Provider } from '@lyket/react';
import { PropsWithChildren } from 'react';

export const LyketProvider = ({ children }: PropsWithChildren) => {
  const lyketApiKey = process.env.NEXT_PUBLIC_LYKET_API_KEY;

  if (lyketApiKey === undefined) {
    throw new Error('NEXT_PUBLIC_LYKET_API_KEY is not defined');
  }

  return <Provider apiKey={lyketApiKey}>{children}</Provider>;
};
