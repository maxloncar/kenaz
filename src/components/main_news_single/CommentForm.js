function CommentForm() {
  return (
    <section className="comment_form">
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla
        <br />
        non netus. Placerat vehicula donec non suscipit egestas, augue vel
        suspendisse. Et felis
        <br />
        venenatis blandit sed est ultrices, adipiscing urna.
      </p>
      <form>
        <input className="form_name" type="text" id="name" name="name" placeholder="Name" />
        <input className="form_email" type="text" id="email" name="email" placeholder="Email Address" />
        <textarea className="form_comment" type="text" id="comment" name="comment" placeholder="Comment" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CommentForm;
