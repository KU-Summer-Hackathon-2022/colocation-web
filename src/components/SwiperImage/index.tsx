import {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider(id:any) {
  const [imgId, setImgId] = useState<number>();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    setImgId(id.id);
  }, [id]);

  return (
    <>
    {imgId && <Slider {...settings}>
      <div>
        <img src={require(`../../assets/images/${imgId}/${imgId}_0.png`)} style={{width: '100%', height: '250px'}} alt='' loading="lazy" />
      </div>
      <div>
        <img src={require(`../../assets/images/${imgId}/${imgId}_1.png`)} style={{width: '100%', height: '250px'}} alt='' loading="lazy" />
      </div>
      <div>
        <img  src={require(`../../assets/images/${imgId}/${imgId}_2.png`)} style={{width: '100%', height: '250px'}} alt=''loading="lazy" />
      </div>
      {/* <div>
        <img src={require("../../assets/images/" + imgId + "/" + imgId + "_3" + ".png")}  style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={require("../../assets/images/" + imgId + "/" + imgId + "_4" + ".png")} style={{width: '100%', height: '250px'}} alt='' />
      </div> */}
    </Slider>}
    </>
  );
}

export default SimpleSlider;