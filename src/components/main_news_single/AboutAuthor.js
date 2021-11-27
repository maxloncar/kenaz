import author from "../../images/author.svg";

function AboutAuthor() {
  return (
    <section className="about_author">
      <h2>About the Author</h2>
      <div className="author_data">
        <img src={author} alt="Author" />
        <p>
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec
          <br />
          hac ultrices nulla non netus. Placerat vehicula donec non suscipit
          <br />
          egestas, augue vel suspendisse. Et felis venenatis blandit sed est
          <br />
          ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien,
          <br />
          eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.
        </p>
      </div>
    </section>
  );
}

export default AboutAuthor;
