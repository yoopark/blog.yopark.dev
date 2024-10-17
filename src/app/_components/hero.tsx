import Image from 'next/image';

import me from '@/assets/images/me.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12">
      <Image
        src={me}
        alt="Me"
        className="h-60 w-60 select-none rounded-full object-cover"
      />
      <div className="flex flex-col items-center gap-1 text-sm">
        <p>안녕하세요, 티브입니다. ✨</p>
        <p>개발과 관련된 내용이라면 최대한 이곳에 연결시킵니다.</p>
        <p className="line-through">위키 겸 블로그 겸 메모장</p>
      </div>
    </section>
  );
};

export default Hero;
