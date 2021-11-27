import React, { useRef } from "react";
import Slider from "react-slick";
import left_arrow from "../../images/white_left_arrow.svg";
import right_arrow from "../../images/white_right_arrow.svg";
import comment_icon from "../../images/comm_icon.svg";
import { Link } from "react-router-dom";
import background from "../../images/slider_background.svg";

function SliderImage() {
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
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="slider">
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        <Link to="/single">
          <div key={1} className="first_article">
            <div className="data">
              <p className="date">August 26, 2013</p>
              <img src={comment_icon} alt="comment icon" />
              <p className="comments">22 Comments</p>
            </div>
            <h1>
              &apos;Margot&apos; breathlessly reimagines Anne Frank&apos;s
              sister
            </h1>
            <button className="read_article">Read article</button>
            <img
              className="slider_background"
              src={background}
              alt="Slider background"
            />
          </div>
        </Link>
        <Link to="/single">
          <div key={2} className="second_article">
            <div className="data">
              <p className="date">May 12, 2007</p>
              <img src={comment_icon} alt="comment icon" />
              <p className="comments">30 Comments</p>
            </div>
            <h1>The gates are open</h1>
            <button className="read_article">Read article</button>
            <img
              className="slider_background"
              src={background}
              alt="Slider background"
            />
          </div>
        </Link>
        <Link to="/single">
          <div key={3} className="third_article">
            <div className="data">
              <p className="date">July 17, 2018</p>
              <img src={comment_icon} alt="comment icon" />
              <p className="comments">14 Comments</p>
            </div>
            <h1>Plitvice lakes - tourist location in Croatia</h1>
            <button className="read_article">Read article</button>
            <img
              className="slider_background"
              src={background}
              alt="Slider background"
            />
          </div>
        </Link>
        <Link to="/single">
          <div key={4} className="fourth_article">
            <div className="data">
              <p className="date">June 5, 2005</p>
              <img src={comment_icon} alt="comment icon" />
              <p className="comments">10 Comments</p>
            </div>
            <h1>The perfect sunset at the mountains</h1>
            <button className="read_article">Read article</button>
            <img
              className="slider_background"
              src={background}
              alt="Slider background"
            />
          </div>
        </Link>
        <Link to="/single">
          <div key={5} className="fifth_article">
            <div className="data">
              <p className="date">April 3, 2021</p>
              <img src={comment_icon} alt="comment icon" />
              <p className="comments">50 Comments</p>
            </div>
            <h1>People need more vacation!</h1>
            <button className="read_article">Read article</button>
            <img
              className="slider_background"
              src={background}
              alt="Slider background"
            />
          </div>
        </Link>
      </Slider>
      <div>
        <img
          className="white_left_arrow"
          src={left_arrow}
          alt="slide_left"
          onClick={previous}
        />
        <img
          className="white_right_arrow"
          src={right_arrow}
          alt="slide_right"
          onClick={next}
        />
      </div>
    </section>
  );
}

export default SliderImage;
