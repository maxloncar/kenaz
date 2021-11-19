import React, { Component } from "react";
import Slider from "react-slick";
import left_arrow from "../images/yellow_left_arrow.svg";
import right_arrow from "../images/yellow_right_arrow.svg";
import image from "../images/new_carousel_image.svg";

export default class NewCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <section className="new_carousel">
        <div className="new_carousel_headline">
          <h2>New Carousel</h2>
          <img
            className="yellow_left_arrow"
            src={left_arrow}
            alt="slide_left"
            onClick={this.previous}
          />
          <img
            className="yellow_right_arrow"
            src={right_arrow}
            alt="slide_right"
            onClick={this.next}
          />
        </div>
        <div className="carousel_slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <div className="carousel">
                <img src={image} alt="new_carousel_image" />
                <p>August 26, 2013</p>
                <h3>For Obama, MLK's shadow looms large ahead of speech</h3>
              </div>
            </div>
            <div key={2}>
              <div className="carousel">
                <img src={image} alt="new_carousel_image" />
                <p>August 26, 2013</p>
                <h3>NASA releases portrait of a planet waving at Saturn</h3>
              </div>
            </div>
            <div key={3}>
              <div className="carousel">
                <img src={image} alt="new_carousel_image" />
                <p>August 26, 2013</p>
                <h3>Plitvice lakes - tourist location in Croatia</h3>
              </div>
            </div>
            <div key={4}>
              <div className="carousel">
                <img src={image} alt="new_carousel_image" />
                <p>August 26, 2013</p>
                <h3>The perfect sunset at the mountains</h3>
              </div>
            </div>
            <div key={5}>
              <div className="carousel">
                <img src={image} alt="new_carousel_image" />
                <p>August 26, 2013</p>
                <h3>People need more vacation!</h3>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
