import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "../../assets/images/0/0_0.png";
import img1 from "../../assets/images/0/0_1.png";
import img2 from "../../assets/images/0/0_2.png";
import img3 from "../../assets/images/0/0_3.png";
import img4 from "../../assets/images/0/0_4.png";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img0} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={img1} style={{width: '100%', height: '250px'}} alt='' loading="lazy"/>
      </div>
      <div>
        <img src={img2} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={img3} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={img4} style={{width: '100%', height: '250px'}} alt='' />
      </div>
    </Slider>
  );
}