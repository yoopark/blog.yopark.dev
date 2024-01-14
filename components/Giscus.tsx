import Giscus from '@giscus/react';

export const GiscusComment = () => {
  const repoUsername = process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_USERNAME ?? '';
  const repoName = process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_NAME ?? '';
  const repoId = process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_ID ?? '';
  const category = process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY ?? '';
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY_ID ?? '';

  return (
    <Giscus
      repo={`${repoUsername}/${repoName}`}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  );
};
