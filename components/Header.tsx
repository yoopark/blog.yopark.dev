import { NewTabLink } from '@/components/NewTabLink';
import { ROUTES } from '@/constants/routes';
import { getLatestPost } from '@/utils/contentlayer/getLatestPost';
import Link from 'next/link';

export const Header = () => {
  const latestPost = getLatestPost();

  return (
    <header className="fixed h-20 w-full flex items-center top-0 bg-white/50 backdrop-blur-md">
      <div className="flex w-full items-center justify-between max-w-screen-lg m-auto px-4">
        <h1 className="font-bold text-2xl transition py-2 px-4 rounded-lg hover:bg-green-100/50 active:bg-green-200/50 active:scale-95">
          <Link href={ROUTES.ROOT}>🌱 Yopark Devlog</Link>
        </h1>
        <nav>
          <ul className="flex gap-2">
            {latestPost !== null && (
              <li className="px-3 py-2 rounded-lg hover:bg-gray-100 transition active:bg-gray-200 active:scale-95 select-none">
                <Link href={ROUTES.POST_OF(latestPost._raw.flattenedPath)}>
                  최신 글 읽기 📝
                </Link>
              </li>
            )}
            <li className="px-3 py-2 rounded-lg hover:bg-gray-100 transition active:bg-gray-200 active:scale-95 select-none">
              <NewTabLink href="https://yopark.dev">About Me ✌️</NewTabLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
