'use client';

import { ClapButton } from '@lyket/react';

import { Post } from '@/.contentlayer/generated';
import { GiscusComment } from '@/components/giscus';

import { PostNavigator } from '@/app/posts/[slug]/components/post-navigator';

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
