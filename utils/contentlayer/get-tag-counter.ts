import { allPosts } from '@contentlayer/generated';

export const getTagCounter = () => {
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
