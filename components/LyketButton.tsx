export const LyketButton = () => {
  return (
    <script
      src={`https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=${
        process.env.NEXT_PUBLIC_LYKET_API_KEY ?? ''
      }`}
    ></script>
  );
};
