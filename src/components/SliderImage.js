import React, { Component } from "react";
import Slider from "react-slick";
import left_arrow from "../images/white_left_arrow.svg";
import right_arrow from "../images/white_right_arrow.svg";
import comment_icon from "../images/comm_icon.svg";

export default class SliderImage extends Component {
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
      <section className="slider">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <div className="first_article">
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
            </div>
          </div>
          <div key={2}>
            <div className="second_article">
              <div className="data">
                <p className="date">May 12, 2007</p>
                <img src={comment_icon} alt="comment icon" />
                <p className="comments">30 Comments</p>
              </div>
              <h1>The gates are open</h1>
              <button className="read_article">Read article</button>
            </div>
          </div>
          <div key={3}>
            <div className="third_article">
              <div className="data">
                <p className="date">July 17, 2018</p>
                <img src={comment_icon} alt="comment icon" />
                <p className="comments">14 Comments</p>
              </div>
              <h1>Plitvice lakes - tourist location in Croatia</h1>
              <button className="read_article">Read article</button>
            </div>
          </div>
          <div key={4}>
            <div className="fourth_article">
              <div className="data">
                <p className="date">June 5, 2005</p>
                <img src={comment_icon} alt="comment icon" />
                <p className="comments">10 Comments</p>
              </div>
              <h1>The perfect sunset at the mountains</h1>
              <button className="read_article">Read article</button>
            </div>
          </div>
          <div key={5}>
            <div className="fifth_article">
              <div className="data">
                <p className="date">April 3, 2021</p>
                <img src={comment_icon} alt="comment icon" />
                <p className="comments">50 Comments</p>
              </div>
              <h1>People need more vacation!</h1>
              <button className="read_article">Read article</button>
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
