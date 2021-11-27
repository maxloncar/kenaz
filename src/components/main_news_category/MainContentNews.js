import calendar from "../../images/calendar.svg";
import image from "../../images/small_image.svg";
import EmptyRectangle from "./EmptyRectangle";
import { Link } from "react-router-dom";

function MainContentNews() {
  return (
    <div className="main_content_news">
      <h2>Patriotsvv make cuts ... and Tim Tebow survives (so far)</h2>
      <div className="article_data">
        <img src={calendar} alt="Calendar" />
        <p>August 26, 2013</p>
        <p>Author: Matej Sudar</p>
        <p>12 Comments</p>
      </div>
      <div className="article_image_text">
        <img src={image} alt="Visual article" />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo.{" "}
        </p>
      </div>
      <Link to="/single"><button>Read article</button></Link>
      <EmptyRectangle />
    </div>
  );
}

export default MainContentNews;
