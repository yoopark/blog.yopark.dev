import { allPosts } from '@contentlayer/generated';
import { format } from 'date-fns';

const Home = () => {
  return (
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
  );
};

export default Home;
