import React, { Component } from "react";
import Slider from "react-slick";
import left_arrow from "../images/brown_left_arrow.svg";
import right_arrow from "../images/brown_right_arrow.svg";
import image from "../images/editorials_image.svg";

export default class Editorials extends Component {
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
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <section className="editorials">
        <div className="editorials_headline">
          <h2>Editorials</h2>
          <img
            className="brown_left_arrow"
            src={left_arrow}
            alt="slide_left"
            onClick={this.previous}
          />
          <img
            className="brown_right_arrow"
            src={right_arrow}
            alt="slide_right"
            onClick={this.next}
          />
        </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <div className="editorial">
                <img src={image} alt="editorial_image" />
                <p>August 26, 2013</p>
                <h3>For Obama, MLK's shadow looms large ahead of speech</h3>
              </div>
            </div>
            <div key={2}>
              <div className="editorial">
                <img src={image} alt="editorial_image" />
                <p>August 26, 2013</p>
                <h3>NASA releases portrait of a planet waving at Saturn</h3>
              </div>
            </div>
            <div key={3}>
              <div className="editorial">
                <img src={image} alt="editorial_image" />
                <p>August 26, 2013</p>
                <h3>Plitvice lakes - tourist location in Croatia</h3>
              </div>
            </div>
            <div key={4}>
              <div className="editorial">
                <img src={image} alt="editorial_image" />
                <p>August 26, 2013</p>
                <h3>The perfect sunset at the mountains</h3>
              </div>
            </div>
            <div key={5}>
              <div className="editorial">
                <img src={image} alt="editorial_image" />
                <p>August 26, 2013</p>
                <h3>People need more vacation!</h3>
              </div>
            </div>
          </Slider>
      </section>
    );
  }
}
