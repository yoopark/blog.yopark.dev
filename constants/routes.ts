export const ROUTES = {
  ROOT: '/',
  POST_OF: (slug: string) => `/posts/${slug}`,
} as const;
