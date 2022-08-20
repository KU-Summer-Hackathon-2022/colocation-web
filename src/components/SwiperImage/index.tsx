import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/1/1_img1.png";
import img2 from "../../assets/images/1/1_img2.png";


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
        <img src={img1} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={img2} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <span>너무 쾌적하고 좋아요! 집 주인 분이 너무 착하시고 요리도 잘하세요. 머무는 동안 정말 행복했습니다.</span>
      </div>
    </Slider>
  );
}