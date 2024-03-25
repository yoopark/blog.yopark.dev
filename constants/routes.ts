const ROUTES = {
  ROOT: '/',
  POST_OF: (slug: string) => `/posts/${slug}`,
  TAG_OF: (tag: string) => `/?tag=${tag}`,
} as const;

export { ROUTES };
