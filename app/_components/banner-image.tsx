import Image from 'next/image';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

type BannerImageProps = {
  src: string | StaticImport;
  alt: string;
};

const BannerImage = (props: BannerImageProps) => {
  return (
    <Image
      {...props}
      className="object-cover w-full h-80 select-none"
      placeholder="blur"
    />
  );
};

export default BannerImage;
