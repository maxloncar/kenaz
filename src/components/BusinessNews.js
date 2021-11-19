import image from "../images/business_image.svg";

function BusinessNews() {
  return (
    <div className="business_news">
      <div className="business_news_data">
        <img src={image} alt="business news" />
        <div className="date_headline">
          <p>August 26, 2013</p>
          <h3>For Obama, MLK's shadow looms large ahead of speech</h3>
        </div>
      </div>
    </div>
  );
}

export default BusinessNews;
