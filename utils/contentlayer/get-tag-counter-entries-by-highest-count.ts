import { getTagCounter } from '@/utils/contentlayer/get-tag-counter';

export const getTagCounterEntriesByHighestCount = () => {
  const counter = getTagCounter();
  const entries = Object.entries(counter);
  entries.sort((a, b) => b[1] - a[1]);
  return entries;
};
