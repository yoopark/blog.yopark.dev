import { allPosts } from '@contentlayer/generated';

const Home = () => {
  return (
    <div>
      {allPosts.map((post) => {
        return (
          <div key={post._raw.flattenedPath}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
