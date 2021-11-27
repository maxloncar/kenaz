import profile_image from "../../images/profile_image.svg";

function Comment({ name }) {
  return (
    <div className="comment">
      <img src={profile_image} alt="Profile avatar" />
      <div className="profile_comment">
        <div className="name_date">
          <h3>{name}</h3>
          <p className="comment_date">Jan 2nd, 2012 2:35 pm</p>
          <p className="reply">Reply</p>
        </div>
        <p className="comment_text">
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec hac
          <br />
          ultrices nulla non netus. Placerat vehicula donec non suscipit
          egestas, augue vel
          <br />
          suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing
          urna.
        </p>
      </div>
    </div>
  );
}

export default Comment;
