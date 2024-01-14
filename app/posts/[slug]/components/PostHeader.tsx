import { Label } from '@/components/Label';
import { Post } from '@contentlayer/generated';
import { format } from 'date-fns';

type PostHeaderProps = Pick<Post, 'title' | 'description' | 'date' | 'tags'>;

export const PostHeader = ({
  title,
  description,
  date,
  tags,
}: PostHeaderProps) => {
  return (
    <div className="py-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {tags !== undefined && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Label key={tag} text={tag} />
            ))}
          </div>
        )}
        <h1 className="font-bold text-4xl">{title}</h1>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-600 text-sm">{format(date, 'yyyy년 M월 d일')}</p>
    </div>
  );
};
