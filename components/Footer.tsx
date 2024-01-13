import yoopaark_circle from '@/assets/images/yoopaark-circle.png';
import Image from 'next/image';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-lg px-8 py-12 m-auto flex gap-8">
        <Image width={80} height={80} src={yoopaark_circle} alt="yoopaark" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">박용준 🌱🌱🌱🌱</h3>
            <p className="text-sm">평생 개발을 곁에 두고 싶어요.</p>
          </div>
          <p className="text-xs">© {year} Yongjun Park.</p>
        </div>
      </div>
    </footer>
  );
};
