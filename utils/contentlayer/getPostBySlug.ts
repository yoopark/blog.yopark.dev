import { allPosts } from '@/.contentlayer/generated';

export const getPostBySlug = (slug: string) => {
  return allPosts.find((post) => post._raw.flattenedPath === slug);
};
