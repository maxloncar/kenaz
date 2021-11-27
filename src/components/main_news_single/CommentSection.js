import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentSection() {
  return (
    <section className="comment_section">
      <h2 className="comments_headline">Comments</h2>
      <div className="profile_comments">
        <Comment name="Matt Adams" />
        <Comment name="John Toews" />
        <Comment name="Andrew Enns" />
      </div>
      <h2 className="add_comment_headline">Add Your Comment</h2>
      <CommentForm />
    </section>
  );
}

export default CommentSection;
