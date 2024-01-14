import { getAllPostsByNewest } from '@/utils/contentlayer/getAllPostsByNewest';

export const getLatestPost = () => {
  const allPosts = getAllPostsByNewest();

  return allPosts.length > 0 ? allPosts[0] : null;
};
