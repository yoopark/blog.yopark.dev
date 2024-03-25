import Link from 'next/link';

import Hamburger from '@/assets/images/icons/hamburger.svg';
import { NewTabLink } from '@/components/new-tab-link';
import { ROUTES } from '@/constants/routes';
import { getLatestPost } from '@/utils/contentlayer/get-latest-post';

export const Header = () => {
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
      </div>
    </header>
  );
};
