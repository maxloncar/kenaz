import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { gallery_data } from "./GalleryData";
import left_arrow from "../../images/white_left_arrow.svg";
import right_arrow from "../../images/white_right_arrow.svg";
import search from "../../images/search.svg";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import background from "../../images/gallery_background.svg";

function Gallery() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => {
      setImageIndex(index);
    },
    customPaging: (i) => {
      return <img src={gallery_data[i]} alt="preview_image" />;
    },
  };

  function getImages() {
    let arrayOfImages = [];
    for (let i = 0; i < gallery_data.length; i++) {
      arrayOfImages[i] = (
        <div key={i + 1} className="gallery_image">
          <img src={gallery_data[i]} alt="gallery image1" />
          <img className="gallery_background" src={background} alt="Gallery background" />
        </div>
      );
    }
    return arrayOfImages;
  }

  const openPopupbox = (counter) => {
    const content = <img src={gallery_data[counter]} alt="Popup" />;
    PopupboxManager.open({
      content,
      config: {
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <section className="gallery">
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        {getImages()}
      </Slider>
      <div>
        <img
          className="white_left_arrow"
          src={left_arrow}
          alt="slide_left"
          onClick={previous}
        />
        <img
          className="search"
          src={search}
          alt="Search icon"
          onClick={() => openPopupbox(imageIndex)}
        />
        <img
          className="white_right_arrow"
          src={right_arrow}
          alt="slide_right"
          onClick={next}
        />
        <PopupboxContainer />
      </div>
    </section>
  );
}

export default Gallery;
