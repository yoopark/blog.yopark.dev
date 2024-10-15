import Image from 'next/image';

import { LuckyDraw } from '@/app/_components/lucky-draw';
import bulbasaur from '@/assets/images/bulbasaur-making-butterfly.gif';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12">
      <Image
        src={bulbasaur}
        alt="Bulbasaur"
        className="h-60 w-60 select-none rounded-full border-2 border-white object-cover shadow-xl"
      />
      <div className="flex flex-col items-center gap-1 text-sm">
        <p>안녕하세요, 티브입니다. ✨</p>
        <p>개발과 관련된 내용이라면 최대한 이곳에 연결시킵니다.</p>
        <p className="line-through">위키 겸 블로그 겸 메모장</p>
      </div>
      <LuckyDraw />
    </section>
  );
};

export default Hero;
