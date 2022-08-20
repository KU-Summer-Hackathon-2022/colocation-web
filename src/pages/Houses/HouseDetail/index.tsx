import React from 'react';
import { InfoTitleContainer, Root } from './styled';
import SimpleSlider from 'components/SwiperImage';
import { useParams } from 'react-router-dom';
import { HouseDescription, HouseTitle, InfoContainer, InfoContent, InfoText, InfoTitle, ReviewContainer, ReviewContent, ReviewText, ReviewTitle } from './styled';
import "./houseDetail.css";
import { BsPerson, BsHouseDoor } from "react-icons/bs";
import {BiBuildingHouse} from "react-icons/bi";
import {IoPricetagsOutline} from "react-icons/io5";
import {MdOutlineBathtub} from "react-icons/md";
import {RiHotelBedLine} from "react-icons/ri";
import {AiOutlineCar} from "react-icons/ai";

const HouseDetail = () => {
  let { id } = useParams();
// - 0 : id
// - 1 : 주소 (나라)
// - 2 : 위도
// - 3 : 경도
// - 4 : 이미지 이름
// - 5 : 집주인 성별
// - 6 : 집 유형(호텔, 단독 주택 등등)
// - 7 : 집 크기
// - 8 : 가격
// - 9 : 화장실 공용 여부
// - 10 : 침대 개수
// - 11 : 카쉐어링
  const houseInfoList = [["0", "대한민국 경상남도 거제시 한내리 한옥", "34.939356233039405", "128.6082892153153", "대한민국 경상남도 거제시 한내리 한옥", "남자", "기타", "48", "253,472", "Yes", "4", "No"],
  ["1", "대한민국 전라남도 신안군 읍내리 쌍용아파트 104동 1115호", "35.05038196507066", "126.1972307669225", "대한민국 전라남도 신안군 읍내리 쌍용아파트 104동 1115호", "남자", "아파트", "56", "157,234", "Yes", "1", "Yes"],
  ["2", "대한민국 전라북도 부안군 본덕리 단독주택", "35.769311249637525", "126.73400479473776", "대한민국 전라북도 부안군 본덕리 단독주택", "여자", "아파트", "12", "126,058", "Yes", "3", "No"],
  ["3", "대한민국 경상북도 영양군 무진리 단독주택", "36.74601182709211", "129.02007542514798", "대한민국 경상북도 영양군 무진리 단독주택", "여자", "기타", "47", "147,746", "Yes", "3", "No"],
  ["4", "대한민국 전라남도 완도군 당락리 단독주택", "34.146014839495685", "126.8387761414148", "대한민국 전라남도 완도군 당락리 단독주택", "남자", "단독주택", "55", "69,128", "No", "4", "No"]]
  
  return (
    <Root>
      <SimpleSlider />
      <div style={{height: '30px'}}></div>
      {id && <>
        <HouseTitle>{houseInfoList[Number(id)][1]}</HouseTitle>
        <hr />
        <HouseDescription>
        도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요
        </HouseDescription>
        <hr />
        <InfoText>숙소 정보</InfoText>
        <InfoContainer>
          <InfoTitleContainer>
          <BsPerson size="18" />
          <InfoTitle>호스트 성별</InfoTitle>
        </InfoTitleContainer>
          <InfoContent>{houseInfoList[Number(id)][5]}</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <BiBuildingHouse />
          <InfoTitle>House Type</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][6]}</InfoContent>
        </InfoContainer>
        <InfoContainer>
        <BsHouseDoor />
          <InfoTitle>House Size</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][7]}m<sup>2</sup></InfoContent>
        </InfoContainer>
        <InfoContainer>
          <IoPricetagsOutline />
          <InfoTitle>Price</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][8]}원</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <MdOutlineBathtub/>
          <InfoTitle>Bathroom</InfoTitle>
          {houseInfoList[Number(id)][9] === 'Yes' ? <div>공용 화장실</div> : <div>단독 화장실</div>}
        </InfoContainer>
        <InfoContainer>
          <RiHotelBedLine />
          <InfoTitle>Beds</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][10]}개</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <AiOutlineCar />
          <InfoTitle>Car Service</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][11]}</InfoContent>
        </InfoContainer>
        <hr />
        <ReviewText>리뷰</ReviewText>
        <ReviewContainer>
        <ReviewTitle>유다연</ReviewTitle>
        <ReviewContent>너무 쾌적하고 좋아요! 집 주인 분이 너무 착하시고 요리도 잘하세요. 머무는 동안 정말 행복했습니다.</ReviewContent>
        </ReviewContainer>
        <hr />
      </>}
    </Root>
  );
};

export default HouseDetail;
