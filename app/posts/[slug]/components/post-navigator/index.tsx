'use client';

import { useRouter } from 'next/navigation';

import { Post } from '@/.contentlayer/generated';
import { ROUTES } from '@/constants/routes';

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
    <div className="flex flex-col w-full gap-3 mx-2 md:flex-row">
      {hasPrevPost && (
        <div
          className="flex flex-col items-start flex-1 gap-2 p-6 transition rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          onClick={() =>
            router.push(ROUTES.POST_OF(prevPost._raw.flattenedPath))
          }
        >
          <p>바로 전에 쓴 글</p>
          <p className="text-lg font-semibold">{prevPost.title}</p>
        </div>
      )}
      {hasNextPost && (
        <div
          className="flex flex-col items-end flex-1 gap-2 p-6 transition rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          onClick={() =>
            router.push(ROUTES.POST_OF(nextPost._raw.flattenedPath))
          }
        >
          <p>그 다음에 쓴 글</p>
          <p className="text-lg font-semibold">{nextPost.title}</p>
        </div>
      )}
    </div>
  );
};

export default PostNavigator;
