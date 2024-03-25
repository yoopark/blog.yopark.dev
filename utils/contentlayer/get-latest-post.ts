import { getAllPostsByNewest } from '@/utils/contentlayer/get-all-posts-by-newest';

export const getLatestPost = () => {
  const allPosts = getAllPostsByNewest();

  return allPosts.length > 0 ? allPosts[0] : null;
};
