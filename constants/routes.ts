const ROUTES = {
  ROOT: '/',
  POST_OF: (slug: string) => `/posts/${slug}`,
  TAG_OF: (tag: string) => `/tags/${tag}`,
} as const;

export { ROUTES };
