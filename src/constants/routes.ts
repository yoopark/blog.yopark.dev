import { flatten } from '@/utils/string';

const ROUTES = {
  ROOT: '/',
  POST_OF: (slug: string) => `/posts/${slug}`,
  TAG_OF: (tag: string) => `/tags/${flatten(tag)}`,
} as const;

export { ROUTES };
