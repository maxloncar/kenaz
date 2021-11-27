import image from "../../images/small_image.svg";
import { Link } from "react-router-dom";

function ShortSport() {
  return (
    <article className="short_sport">
      <div className="short_sport_headline">
        <h2>Sport</h2>
        <Link to="/category">
          <p>See all</p>
        </Link>
      </div>
      <div className="short_sport_data">
        <div className="first_short_sport">
          <Link to="/category">
            <img src={image} alt="first sport" />
            <div className="short_sport_date">
              <p>August 26, 2013</p>
            </div>
            <h3 className="short_sport_description">
              For Obama, MLK's shadow looms large ahead of speech
            </h3>
          </Link>
        </div>
        <div className="second_short_sport">
          <Link to="/category">
            <img src={image} alt="second sport" />
            <div className="short_sport_date">
              <p>August 26, 2013</p>
            </div>
            <h3 className="short_sport_description">
              NASA releases portrait of a planet waving at Saturn
            </h3>
          </Link>
        </div>
        <div className="third_short_sport">
          <Link to="/category">
            <img src={image} alt="third sport" />
            <div className="short_sport_date">
              <p>August 26, 2013</p>
            </div>
            <h3 className="short_sport_description">
              Patriotsvv make cuts... Tim Tebow survives (so f
            </h3>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ShortSport;
