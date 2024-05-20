import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type BannerImageProps = {
  src: string | StaticImport;
  alt: string;
};

const BannerImage = (props: BannerImageProps) => {
  return (
    <Image
      {...props}
      className="h-80 w-full select-none object-cover"
      placeholder="blur"
    />
  );
};

export default BannerImage;
