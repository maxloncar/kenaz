import post_image from "../../images/post_image.svg";

function Post() {
  return (
    <div className="post">
      <div className="post_text">
        <div className="post_date">
          <p>August 26, 2013</p>
          <p>5</p>
        </div>
        <h3>Palestinians call off peace talks after clash</h3>
      </div>
      <div className="post_image">
        <img src={post_image} alt="Post" />
      </div>
    </div>
  );
}

export default Post;
