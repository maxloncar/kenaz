import book from "../../images/book.svg";
import share from "../../images/share.svg";

function SingleNews() {
  return (
    <section className="single_news">
      <p>
        Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta
        ac
        <br />
        consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed
        consectetur.
        <br />
        Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean
        lacinia bibendum
        <br />
        nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas
        eget quam.
        <br />
        Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor
        <br />
        auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Donec sed odio dui.
        <br />
        Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus
        porttitor. Nulla
        <br />
        vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis
        ornare vel eu
        <br />
        leo.
      </p>
      <img src={book} alt="Book" />
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices
        <br />
        nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel
        suspendisse.
        <br />
        Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam
        nullam facilisis
        <br />
        aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi
        purus nisl lorem.
        <br />
        Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum
        odio nulla,
        <br />
        mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit
        suspendisse,
        <br />
        condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio
        nulla, mi
        <br />
        turpis diam tellus laoreet congue.
      </p>
      <img src={share} alt="Share" />
    </section>
  );
}

export default SingleNews;
