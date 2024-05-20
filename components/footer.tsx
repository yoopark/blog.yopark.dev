import Image from 'next/image';

import yoopaark_circle from '@/assets/images/yoopaark-circle.png';
import SocialGroup from '@/components/social-group';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="m-auto flex max-w-screen-lg flex-col gap-10 px-8 py-12 md:flex-row">
        <Image
          width={200}
          height={200}
          className="h-20 w-20 select-none"
          src={yoopaark_circle}
          alt="yoopaark"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">박용준 · Yongjun Park 🌱🌱🌱🌱</h3>
            <p className="text-sm">
              프론트엔드 개발자를 꿈꾸는 대학생입니다. 평생 개발을 곁에 두고
              싶어요.
            </p>
          </div>
          <SocialGroup
            githubUrl="https://github.com/yoopark"
            linkedInUrl="https://www.linkedin.com/in/yopark-dev"
          />
          <p className="text-xs">© {year} Yongjun Park.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
