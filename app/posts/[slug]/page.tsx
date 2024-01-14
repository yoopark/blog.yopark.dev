import { PostPageHeader } from '@/app/posts/[slug]/components/PostPageHeader';
import { getPostBySlug } from '@/utils/contentlayer/getPostBySlug';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

const MDXNewTabAnchor = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  if (props.className === 'anchor') {
    return <a {...props} />;
  }
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="max-w-screen-lg m-auto px-4">
      <PostPageHeader post={post} />
      <article>
        <MDXContent components={{ a: MDXNewTabAnchor }} />
      </article>
    </div>
  );
};

export default PostPage;
