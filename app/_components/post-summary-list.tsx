import { type Post } from '#velite';

import PostSummaryListItem from '@/app/_components/post-summary-list-item';

type PostSummaryListProps = {
  posts: Post[];
};

const PostSummaryList = ({ posts }: PostSummaryListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <PostSummaryListItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostSummaryList;
