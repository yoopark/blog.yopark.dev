import { getAllPostsByNewest } from '@/utils/contentlayer/get-all-posts-by-newest';

export const getPostWithAdjacentPostBySlug = (slug: string) => {
  const allPosts = getAllPostsByNewest();
  const currentIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === slug,
  );
  const prevPost = allPosts[currentIndex + 1] || null;
  const nextPost = allPosts[currentIndex - 1] || null;
  const post = allPosts[currentIndex];
  return { post, prevPost, nextPost };
};
