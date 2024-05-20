'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { type Post } from '#velite';

import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/tailwind';

type PostNavigatorProps = {
  prevPost: Post | null;
  nextPost: Post | null;
};

const PostNavigator = ({ prevPost, nextPost }: PostNavigatorProps) => {
  const router = useRouter();
  const hasPrevPost = prevPost !== null;
  const hasNextPost = nextPost !== null;

  if (!hasPrevPost && !hasNextPost) {
    return <></>;
  }

  return (
    <div className="mx-2 flex w-full select-none flex-col gap-3 md:flex-row">
      {hasPrevPost && (
        <Link
          href={ROUTES.POST_OF(prevPost.slug)}
          className={cn(
            'flex flex-1 cursor-pointer select-none flex-col items-start gap-2 rounded-lg bg-gray-50 p-6',
            'transition hover:bg-gray-100 active:scale-[.98] active:bg-gray-200',
          )}
        >
          <p>바로 전에 쓴 글</p>
          <p className="text-lg font-semibold">{prevPost.title}</p>
        </Link>
      )}
      {hasNextPost && (
        <Link
          href={ROUTES.POST_OF(nextPost.slug)}
          className={cn(
            'flex flex-1 cursor-pointer select-none flex-col items-end gap-2 rounded-lg bg-gray-50 p-6',
            'transition hover:bg-gray-100 active:scale-[.98] active:bg-gray-200',
          )}
        >
          <p>그 다음에 쓴 글</p>
          <p className="text-lg font-semibold">{nextPost.title}</p>
        </Link>
      )}
    </div>
  );
};

export default PostNavigator;
