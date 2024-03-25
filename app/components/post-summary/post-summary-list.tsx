import { Post } from '@contentlayer/generated';

import { PostSummaryListItem } from '@/app/components/post-summary/post-summary-list-item';

type PostSummaryListProps = {
  posts: Post[];
};

export const PostSummaryList = ({ posts }: PostSummaryListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <PostSummaryListItem key={post._raw.flattenedPath} post={post} />
      ))}
    </div>
  );
};
