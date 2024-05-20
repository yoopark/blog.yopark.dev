import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

import { type AnchorHTMLAttributes } from 'react';

import type { Post as PostType } from '@contentlayer/generated';

import PostHeader from '@/app/posts/[slug]/_components/post-header';

type PostProps = {
  post: PostType;
};

const MdxNewTabAnchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (props.className === 'anchor') {
    return <a {...props} />;
  }

  return <a {...props} target="_blank" rel="noopener noreferrer" />;
};

export const Post = ({
  post: {
    body: { code },
    thumbnail = '/images/blue-gradient.jpeg',
    ...props
  },
}: PostProps) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="flex flex-col gap-20 px-4">
      <div className="flex flex-col gap-10">
        <PostHeader {...props} />
        <Image
          src={thumbnail}
          alt={props.title}
          width={2000}
          height={2000}
          className="aspect-video w-full rounded-lg object-cover"
        />
      </div>
      <article className="prose mx-auto">
        <MDXContent components={{ a: MdxNewTabAnchor }} />
      </article>
    </div>
  );
};
