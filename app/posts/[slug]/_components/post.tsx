import Image from 'next/image';

import type { Post as PostType } from '#velite';

import PostHeader from '@/app/posts/[slug]/_components/post-header';
import blue_gradient from '@/assets/images/blue-gradient.jpeg';

type PostProps = {
  post: PostType;
};

// const MdxNewTabAnchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
//   if (props.className === 'anchor') {
//     return <a {...props} />;
//   }

//   return <a {...props} target="_blank" rel="noopener noreferrer" />;
// };

export const Post = ({ post: { cover, content, ...props } }: PostProps) => {
  return (
    <div className="flex flex-col gap-20 px-4">
      <div className="flex flex-col gap-10">
        <PostHeader {...props} />
        <Image
          src={cover ?? blue_gradient}
          alt={props.title}
          width={2000}
          height={2000}
          className="aspect-video w-full rounded-lg object-cover"
        />
      </div>
      <article
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
