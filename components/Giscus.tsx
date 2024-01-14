export const Giscus = () => {
  return (
    <script
      src="https://giscus.app/client.js"
      data-repo={process.env.NEXT_PUBLIC_GISCUS_DATA_REPO ?? ''}
      data-repo-id={process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_ID ?? ''}
      data-category={process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY ?? ''}
      data-category-id={process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY_ID ?? ''}
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="preferred_color_scheme"
      data-lang="ko"
      crossOrigin="anonymous"
      async
    ></script>
  );
};
