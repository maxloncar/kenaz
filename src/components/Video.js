import image from "../images/video.svg";
import rectangle from "../images/rounded_rectangle.svg";
import play from "../images/play.svg";

function Video() {
  return (
    <section className="video">
        <h2>Kenaz TV</h2>
        <img className="video_image" src={image} alt="video" />
        <img className="rectangle" src={rectangle} alt="rectangle" />
        <img className="play" src={play} alt="play icon" />
      <div className="video_data">
        <p>August 26, 2013</p>
        <h3>NASA releases portrait of a planet waving at Saturn</h3>
      </div>
    </section>
  );
}

export default Video;
