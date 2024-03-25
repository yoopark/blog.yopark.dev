import { allPosts } from '@/.contentlayer/generated';

export const getAllPostsByNewest = () => {
  return allPosts.sort((a, b) => b.date.localeCompare(a.date));
};
