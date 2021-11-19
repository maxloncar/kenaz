import image from "../images/small_image.svg";

function ShortNews() {
  return (
    <article className="short_news">
      <div className="short_news_headline">
        <h2>News</h2>
        <p>See all</p>
      </div>
      <div className="short_news_data">
        <div className="first_short_news">
          <img src={image} alt="first news" />
          <div className="short_news_date">
            <p>August 26, 2013</p>
            <p>14</p>
          </div>
          <h3 className="short_news_description">
            For Obama, MLK's shadow looms large ahead of speech
          </h3>
        </div>
        <div className="second_short_news">
          <img src={image} alt="second news" />
          <div className="short_news_date">
            <p>August 26, 2013</p>
            <p>22</p>
          </div>
          <h3 className="short_news_description">
            NASA releases portrait of a planet waving at Saturn
          </h3>
        </div>
        <div className="third_short_news">
          <img src={image} alt="third news" />
          <div className="short_news_date">
            <p>August 26, 2013</p>
            <p>5</p>
          </div>
          <h3 className="short_news_description">
            Patriotsvv make cuts... Tim Tebow survives (so f
          </h3>
        </div>
      </div>
    </article>
  );
}

export default ShortNews;
