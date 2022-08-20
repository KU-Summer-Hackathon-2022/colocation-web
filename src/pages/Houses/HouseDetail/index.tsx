import React, { useState, useEffect } from 'react';
import { Root } from './styled';
// import firebase from "../../../firebase";
// import { getDatabase, ref, onValue} from "firebase/database";
import img1 from "../../../assets/images/1/1_img1.png";
import img2 from "../../../assets/images/1/1_img2.png";

const HouseDetail = () => {
  const [title, setTitle] = useState<String>("house title");
  // // const starCountRef = ref(db, 'houses/' + postId + '/starCount');
  // // const houseRef = firebase.database().ref('houses');
  // const db = getDatabase();
  // console.log(db);
  useEffect(() => {
    setTitle("house title");
  }, []);
  return (
    <Root>
      <div>house detail page</div>
      <div>{title}</div>
      <img src={img1} style={{width:'300px'}} alt='' />
      <img src={img2} style={{width:'300px'}} alt='' />
      {/* <SwiperImage data={imgList} /> */}
    </Root>
  );
};

export default HouseDetail;
