import BusinessNews from "./BusinessNews";

function ShortBusiness() {
  return (
    <article className="short_business">
      <div className="short_business_headline">
        <h2>Business</h2>
        <p>See all</p>
      </div>
      <div className="business_news_rows">
        <div className="business_news_first_row">
          <BusinessNews />
          <BusinessNews />
        </div>
        <div className="business_news_second_row">
          <BusinessNews />
          <BusinessNews />
        </div>
      </div>
    </article>
  );
}

export default ShortBusiness;
