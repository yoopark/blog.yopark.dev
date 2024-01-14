'use client';

import { Post } from '@/.contentlayer/generated';
import { PostNavigator } from '@/app/posts/[slug]/components/PostNavigator';
import { GiscusComment } from '@/components/Giscus';
import { ClapButton } from '@lyket/react';

type PostFooterProps = {
  post: Post;
  prevPost: Post;
  nextPost: Post;
};

export const PostFooter = ({ post, prevPost, nextPost }: PostFooterProps) => {
  return (
    <>
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      <ClapButton id={post._raw.flattenedPath} namespace="post" />
      <GiscusComment />
    </>
  );
};
