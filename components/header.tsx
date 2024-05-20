import Link from 'next/link';

import { posts } from '#velite';

import Hamburger from '@/assets/images/icons/hamburger.svg';
import NewTabLink from '@/components/new-tab-link';
import ReadRandomPost from '@/components/read-random-post';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/tailwind';
import { getLatestPost } from '@/utils/velite';

const Header = () => {
  const latestPost = getLatestPost();

  return (
    <header className="fixed top-0 z-10 flex h-20 w-full items-center bg-white/50 backdrop-blur-md">
      <div className="mx-auto w-full max-w-screen-lg px-4">
        <div className="flex items-center justify-between md:hidden">
          <div className="cursor-pointer rounded-lg p-2 transition active:scale-95 active:bg-gray-200/50">
            <Hamburger className="h-6 w-6 rounded-lg text-gray-500 active:scale-95 active:bg-gray-100" />
          </div>
          <h1 className="rounded-lg px-4 py-2 text-2xl font-bold transition hover:bg-green-100/50 active:scale-95 active:bg-green-200/50">
            <Link href={ROUTES.ROOT}>🌱</Link>
          </h1>
        </div>
        <div className="hidden w-full items-center justify-between md:flex">
          <Link
            href={ROUTES.ROOT}
            className="rounded-lg px-4 py-2 transition hover:bg-green-100/50 active:scale-[.98] active:bg-green-200/50"
          >
            <h1 className="select-none text-2xl font-bold">🌱 Yopark Devlog</h1>
          </Link>
          <nav>
            <ul className="flex gap-1">
              {posts.length !== 0 && (
                <li>
                  <ReadRandomPost />
                </li>
              )}
              {latestPost !== null && (
                <li>
                  <Link
                    href={ROUTES.POST_OF(latestPost.slug)}
                    className={cn(
                      'select-none rounded-lg px-4 py-3',
                      'transition hover:bg-gray-200/50 active:bg-gray-300/50',
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
                    'select-none rounded-lg px-4 py-3',
                    'transition hover:bg-gray-200/50 active:bg-gray-300/50',
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
