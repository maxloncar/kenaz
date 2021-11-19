import React, { Component } from "react";
import Slider from "react-slick";
import { gallery_data } from "./GalleryData";
import left_arrow from "../images/white_left_arrow.svg";
import right_arrow from "../images/white_right_arrow.svg";
import search from "../images/search.svg";

export default class Gallery extends Component {
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
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      customPaging: function (i) {
        return <img src={gallery_data[i]} alt="preview_image" />;
      },
    };
    return (
      <section className="gallery">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <div className="gallery_image">
              <img src={gallery_data[0]} alt="gallery image1" />
            </div>
          </div>
          <div key={2}>
            <div className="gallery_image">
              <img src={gallery_data[1]} alt="gallery image2" />
            </div>
          </div>
          <div key={3}>
            <div className="gallery_image">
              <img src={gallery_data[2]} alt="gallery image3" />
            </div>
          </div>
          <div key={4}>
            <div className="gallery_image">
              <img src={gallery_data[3]} alt="gallery image4" />
            </div>
          </div>
          <div key={5}>
            <div className="gallery_image">
              <img src={gallery_data[4]} alt="gallery image5" />
            </div>
          </div>
          <div key={6}>
            <div className="gallery_image">
              <img src={gallery_data[5]} alt="gallery image6" />
            </div>
          </div>
          <div key={7}>
            <div className="gallery_image">
              <img src={gallery_data[6]} alt="gallery image7" />
            </div>
          </div>
        </Slider>
        <div>
          <img
            className="white_left_arrow"
            src={left_arrow}
            alt="slide_left"
            onClick={this.previous}
          />
          <img className="search" src={search} />
          <img
            className="white_right_arrow"
            src={right_arrow}
            alt="slide_right"
            onClick={this.next}
          />
        </div>
      </section>
    );
  }
}
