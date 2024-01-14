import Script from 'next/script';

export const LyketButton = () => {
  return (
    <Script
      src={`https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=${
        process.env.NEXT_PUBLIC_LYKET_API_KEY ?? ''
      }`}
    ></Script>
  );
};
