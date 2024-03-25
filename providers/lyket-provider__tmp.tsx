import { Provider } from '@lyket/react';

export const LyketProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider apiKey={process.env.NEXT_PUBLIC_LYKET_API_KEY ?? ''}>
      {children}
    </Provider>
  );
};
