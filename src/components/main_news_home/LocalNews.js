import React, { useRef } from "react";
import Slider from "react-slick";
import left_arrow from "../../images/brown_left_arrow.svg";
import right_arrow from "../../images/brown_right_arrow.svg";
import image from "../../images/editorials_image.svg";
import { Link } from "react-router-dom";

function LocalNews() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="editorials">
      <div className="editorials_headline">
        <h2>Local News</h2>
        <img
          className="brown_left_arrow"
          src={left_arrow}
          alt="slide_left"
          onClick={previous}
        />
        <img
          className="brown_right_arrow"
          src={right_arrow}
          alt="slide_right"
          onClick={next}
        />
      </div>
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        <div key={1} className="editorial">
          <Link to="/category">
            <img src={image} alt="editorial_image" />
            <p>August 26, 2013</p>
            <h3>For Obama, MLK's shadow looms large ahead of speech</h3>
          </Link>
        </div>
        <div key={2} className="editorial">
          <Link to="/category">
            <img src={image} alt="editorial_image" />
            <p>August 26, 2013</p>
            <h3>NASA releases portrait of a planet waving at Saturn</h3>
          </Link>
        </div>
        <div key={3} className="editorial">
          <Link to="/category">
            <img src={image} alt="editorial_image" />
            <p>August 26, 2013</p>
            <h3>Plitvice lakes - tourist location in Croatia</h3>
          </Link>
        </div>
        <div key={4} className="editorial">
          <Link to="/category">
            <img src={image} alt="editorial_image" />
            <p>August 26, 2013</p>
            <h3>The perfect sunset at the mountains</h3>
          </Link>
        </div>
        <div key={5} className="editorial">
          <Link to="/category">
            <img src={image} alt="editorial_image" />
            <p>August 26, 2013</p>
            <h3>People need more vacation!</h3>
          </Link>
        </div>
      </Slider>
    </section>
  );
}

export default LocalNews;
