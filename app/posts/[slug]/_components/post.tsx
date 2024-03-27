import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

import PostHeader from '@/app/posts/[slug]/_components/post-header';

import type { Post as PostType } from '@contentlayer/generated';

type PostProps = {
  post: PostType;
};

const MdxNewTabAnchor = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
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
    <div className="px-4 flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <PostHeader {...props} />
        <Image
          src={thumbnail}
          alt={props.title}
          width={2000}
          height={2000}
          className="rounded-lg object-cover aspect-video w-full"
        />
      </div>
      <article className="prose mx-auto">
        <MDXContent components={{ a: MdxNewTabAnchor }} />
      </article>
    </div>
  );
};
