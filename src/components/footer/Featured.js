import Post from "./Post";

function Featured() {
  return (
    <div className="featured">
        <h2>Featured</h2>
        <Post />
        <div className="grayLine"></div>
        <Post />
        <div className="grayLine"></div>
        <Post />
    </div>
  );
}

export default Featured;
