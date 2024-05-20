import { posts } from '#velite';

import { flatten } from '@/utils/string';

const getPostsByNewest = () => {
  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

const getLatestPost = () => {
  const posts = getPostsByNewest();

  return posts.length > 0 ? posts[0] : null;
};

const getRandomPost = () => {
  if (posts.length === 0) {
    return null;
  }

  return posts[Math.floor(Math.random() * posts.length)];
};

const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};

const getPostWithAdjacentPostBySlug = (slug: string) => {
  const posts = getPostsByNewest();
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const prevPost = posts[currentIndex + 1] || null;
  const nextPost = posts[currentIndex - 1] || null;
  const post = posts[currentIndex];

  return { post, prevPost, nextPost };
};

const getPostsByNewestByTag = (tag: string) => {
  const posts = getPostsByNewest();

  return posts.filter((post) => post.tags && post.tags.includes(tag));
};

const getTagCounter = () => {
  const counter: { [key: string]: number } = {};

  posts.forEach((post) => {
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

  posts.forEach((post) => {
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
  getAllTags,
  getLatestPost,
  getPostBySlug,
  getPostWithAdjacentPostBySlug,
  getPostsByNewest,
  getPostsByNewestByTag,
  getRandomPost,
  getTagCounter,
  getTagCounterEntriesByHighestCount,
};
