import {useState, useEffect} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img0 from "../../assets/images/0/0_0.png";
// import img1 from "../../assets/images/0/0_1.png";
// import img2 from "../../assets/images/0/0_2.png";
// import img3 from "../../assets/images/0/0_3.png";
// import img4 from "../../assets/images/0/0_4.png";


function SimpleSlider(id:any) {
  const [imgId, setImgId] = useState<number>();
  // const [imgList, setImgList] = useState<string[]>([img0, img1, img2, img3, img4]);
  // const [newImgList, setNewImgList] = useState<string[]>([]);
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

  // const newImgList:any = []

  // useEffect(() => {
  // imgId && imgList.map((value, index) => {
  //   const imgTextList = value.split('.');
  //   const imgTextBefore = imgTextList[0].substring(0, imgTextList[0].lastIndexOf('/') + 1);
  //   const imgText = imgTextBefore + imgId?.toString() + "_" + index.toString() + "." + imgTextList[1] + "." + imgTextList[2];
  //   newImgList.push(imgText);
  // });
  // }, [imgId]);

  // setImgList(newImgList);

  // useEffect(() => {
  //   console.log(imgList);
  // }, [imgList]);

  return (
    <>
    {imgId && <Slider {...settings}>
      <div>
        <img src={require(`../../assets/images/${imgId}/${imgId}_0.png`)} style={{width: '100%', height: '250px'}} alt='' />
      </div>
      <div>
        <img src={require(`../../assets/images/${imgId}/${imgId}_1.png`)} style={{width: '100%', height: '250px'}} alt='' loading="lazy"/>
      </div>
      <div>
        <img  src={require(`../../assets/images/${imgId}/${imgId}_2.png`)} style={{width: '100%', height: '250px'}} alt='' />
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