import forest from '@/assets/images/forest.jpeg';
import { allPosts } from '@contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Image src={forest} alt="forest" className="object-cover w-full h-80" />
      <div>
        {allPosts.map((post) => {
          return (
            <div key={post._raw.flattenedPath}>
              <h1>{post.title}</h1>
              <p>{format(post.date, 'yyyy. MM. dd.')}</p>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
