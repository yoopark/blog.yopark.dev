'use client';

import { ClapButton } from '@lyket/react';

import { Post } from '@/.contentlayer/generated';
import { GiscusComment } from '@/components/Giscus';

import { PostNavigator } from '@/app/posts/[slug]/components/PostNavigator';

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
