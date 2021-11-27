import background from "../../images/title_data_background.svg";

function TitleImage() {
  return (
    <section className="title_image">
      <div className="title_data">
        <p>August 26, 2013</p>
        <h1>
          &apos;Margot&apos; breathlessly reimagines Anne Frank&apos;s sister
        </h1>
      </div>
      <img src={background} alt="Title data background" />
    </section>
  );
}

export default TitleImage;
