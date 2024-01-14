import { ScrollProgressBar } from '@/components/ScrollProgressBar';

const PostLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  );
};

export default PostLayout;
