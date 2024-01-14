import { getAllPostsByNewest } from '@/utils/contentlayer/getAllPostsByNewest';

export const getPostsByNewestByTag = (tag: string | null) => {
  const allPosts = getAllPostsByNewest();
  if (tag === null) {
    return allPosts;
  }
  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
};
