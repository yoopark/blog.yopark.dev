import Giscus from '@giscus/react';

import type { GiscusRepoType } from '@/types/giscus';
import { getOrThrow } from '@/utils/env';

const GiscusComment = () => {
  const repoUsername = getOrThrow(
    process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_USERNAME,
  );
  const repoName = getOrThrow(process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_NAME);
  const repoId = getOrThrow(process.env.NEXT_PUBLIC_GISCUS_DATA_REPO_ID);
  const category = getOrThrow(process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY);
  const categoryId = getOrThrow(
    process.env.NEXT_PUBLIC_GISCUS_DATA_CATEGORY_ID,
  );

  const repo: GiscusRepoType = `${repoUsername}/${repoName}`;

  return (
    <Giscus
      repo={repo}
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

export default GiscusComment;
