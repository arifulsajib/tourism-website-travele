import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../Images/banners/banner1.jpg";
import banner2 from "../../../Images/banners/banner2.png";
import banner3 from "../../../Images/banners/banner3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner1} alt="First slide" />
        <Carousel.Caption className="caption rounded-3">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner2} alt="Second slide" />

        <Carousel.Caption className="caption">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner3} alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
