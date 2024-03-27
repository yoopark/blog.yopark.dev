import Link from 'next/link';

import { allPosts } from '@/.contentlayer/generated';
import Hamburger from '@/assets/images/icons/hamburger.svg';
import NewTabLink from '@/components/new-tab-link';
import ReadRandomPost from '@/components/read-random-post';
import { ROUTES } from '@/constants/routes';
import { getLatestPost } from '@/utils/contentlayer';
import { cn } from '@/utils/tailwind';

const Header = () => {
  const latestPost = getLatestPost();

  return (
    <header className="fixed h-20 top-0 flex w-full items-center bg-white/50 backdrop-blur-md z-10">
      <div className="max-w-screen-lg w-full mx-auto px-4">
        <div className="flex md:hidden justify-between items-center">
          <div className="transition p-2 rounded-lg active:bg-gray-200/50 active:scale-95 cursor-pointer">
            <Hamburger className="rounded-lg w-6 h-6 text-gray-500 active:bg-gray-100 active:scale-95" />
          </div>
          <h1 className="font-bold text-2xl transition py-2 px-4 rounded-lg hover:bg-green-100/50 active:bg-green-200/50 active:scale-95">
            <Link href={ROUTES.ROOT}>🌱</Link>
          </h1>
        </div>
        <div className="hidden md:flex w-full justify-between items-center">
          <Link
            href={ROUTES.ROOT}
            className="px-4 py-2 rounded-lg hover:bg-green-100/50 active:bg-green-200/50 active:scale-[.98] transition"
          >
            <h1 className="font-bold text-2xl select-none">🌱 Yopark Devlog</h1>
          </Link>
          <nav>
            <ul className="flex gap-1">
              {allPosts.length !== 0 && (
                <li>
                  <ReadRandomPost />
                </li>
              )}
              {latestPost !== null && (
                <li>
                  <Link
                    href={ROUTES.POST_OF(latestPost._raw.flattenedPath)}
                    className={cn(
                      'px-4 py-3 rounded-lg select-none',
                      'hover:bg-gray-200/50 transition active:bg-gray-300/50',
                    )}
                  >
                    최신 글 읽기 📝
                  </Link>
                </li>
              )}
              <li>
                <NewTabLink
                  href="https://yopark.dev"
                  className={cn(
                    'px-4 py-3 rounded-lg select-none',
                    'hover:bg-gray-200/50 transition active:bg-gray-300/50',
                  )}
                >
                  About Me ✌️
                </NewTabLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
