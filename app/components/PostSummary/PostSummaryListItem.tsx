import { Label } from '@/components/Label';
import { FadeInFromLeft } from '@/components/framer-motion/FadeInFromLeft';
import { ROUTES } from '@/constants/routes';
import { Post } from '@contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

type PostSummaryListItemProps = {
  post: Post;
};

export const PostSummaryListItem = ({
  post: {
    date,
    title,
    description,
    thumbnail = '/images/blue-gradient.jpeg',
    tags,
    _raw: { flattenedPath },
  },
}: PostSummaryListItemProps) => {
  return (
    <FadeInFromLeft>
      <Link href={ROUTES.POST_OF(flattenedPath)}>
        <div className="bg-gray-100/50 p-5 rounded-lg flex gap-8 hover:bg-gray-100 active:bg-gray-200 active:scale-[.98] transition items-center">
          <Image
            src={thumbnail}
            alt={title}
            className="object-cover w-52 h-28 rounded-lg"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">{format(date, 'yyyy. MM. dd.')}</p>
              <h3 className="text-xl font-bold">{title}</h3>
              {description !== undefined && <p>{description}</p>}
            </div>
            {tags !== undefined && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Label key={tag} text={tag} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </FadeInFromLeft>
  );
};
