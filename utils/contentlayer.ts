import { allPosts } from '@/.contentlayer/generated';
import { flatten } from '@/utils/string';

const getAllPostsByNewest = () => {
  return allPosts.sort((a, b) => b.date.localeCompare(a.date));
};

const getLatestPost = () => {
  const allPosts = getAllPostsByNewest();

  return allPosts.length > 0 ? allPosts[0] : null;
};

const getRandomPost = () => {
  if (allPosts.length === 0) {
    return null;
  }

  return allPosts[Math.floor(Math.random() * allPosts.length)];
};

const getPostBySlug = (slug: string) => {
  return allPosts.find((post) => post._raw.flattenedPath === slug);
};

const getPostWithAdjacentPostBySlug = (slug: string) => {
  const allPosts = getAllPostsByNewest();
  const currentIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === slug,
  );
  const prevPost = allPosts[currentIndex + 1] || null;
  const nextPost = allPosts[currentIndex - 1] || null;
  const post = allPosts[currentIndex];

  return { post, prevPost, nextPost };
};

const getPostsByNewestByTag = (tag: string) => {
  const allPosts = getAllPostsByNewest();

  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
};

const getTagCounter = () => {
  const counter: { [key: string]: number } = {};

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      if (!counter[tag]) {
        counter[tag] = 0;
      }
      counter[tag]++;
    });
  });

  return counter;
};

const getTagCounterEntriesByHighestCount = () => {
  const counter = getTagCounter();
  const entries = Object.entries(counter);

  entries.sort((a, b) => b[1] - a[1]);

  return entries;
};

const getAllTags = () => {
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(tag);
    });
  });

  return Array.from(tags);
};

const findTagByFlattenedTag = (flattenedTag: string) => {
  const allTags = getAllTags();

  return allTags.find((tag) => flatten(tag) === flattenedTag) ?? null;
};

export {
  findTagByFlattenedTag,
  getAllPostsByNewest,
  getAllTags,
  getLatestPost,
  getPostBySlug,
  getPostWithAdjacentPostBySlug,
  getPostsByNewestByTag,
  getRandomPost,
  getTagCounter,
  getTagCounterEntriesByHighestCount,
};
