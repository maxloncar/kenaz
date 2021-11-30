import Post from "./Post";

function RandomPosts() {
  return (
    <div className="random_posts">
        <h2>Random Posts</h2>
        <Post />
        <div className="grayLine"></div>
        <Post />
        <div className="grayLine"></div>
        <Post />
    </div>
  );
}

export default RandomPosts;
