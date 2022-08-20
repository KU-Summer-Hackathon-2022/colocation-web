import React from 'react';
import { Root } from './styled';
import SimpleSlider from 'components/SwiperImage';
import { useParams } from 'react-router-dom';
import { HouseDescription, HouseTitle, InfoContainer, InfoContent, InfoText, InfoTitle, ReviewContainer, ReviewContent, ReviewText, ReviewTitle } from 'components/CheckBox/styled';
import "./houseDetail.css";

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
// - 10 : 침대 갯수
// - 11 : 카쉐어링
  const houseInfoList = [['0', '대한민국 충청북도 청주시 흥덕구 복합주택', '36.716449902112394', '127.36472407566876', '대한민국 충청북도 청주시 흥덕구 복합주택', '공개하지 않음', '아파트', '41', '169', 'Yes', '2', 'No'],
  ['1', '대한민국 전라남도 장성군 산정리 복합주택', '35.26588985820261', '126.82328183350438', '대한민국 전라남도 장성군 산정리 복합주택', '공개하지 않음', '아파트', '38', '174', 'Yes', '2', 'No'],
  ['2', '대한민국 경상남도 함안군 이룡리 진달래 108동 1114호', '35.36529185789838', '128.5053057906544', '대한민국 경상남도 함안군 이룡리 진달래 108동 1114호', '공개하지 않음', '기타(ex:전통가옥)', '86', '121', 'No', '3', 'No'],
  ['3', '대한민국 경기도 부천시 대장동 단독주택', '37.54180590602732', '126.77860817953224', '대한민국 경기도 부천시 대장동 단독주택', '여자', '단독주택', '51', '84', 'Yes', '3', 'Yes'],
  ['4', '대한민국 경기도 광주시 무갑리 한옥', '37.4164368218093', '127.34818106533388', '대한민국 경기도 광주시 무갑리 한옥', '남자', '아파트', '63', '157', 'No', '2', 'Yes']];
  
  return (
    <Root>
      <SimpleSlider />
      <div style={{height: '30px'}}></div>
      {/* {houseInfoList[Number(id)].map((value, index) => (
        <div key={index}>{value}</div>
      ))} */}
      {id && <>
        <HouseTitle>{houseInfoList[Number(id)][1]}</HouseTitle>
        <hr />
        <HouseDescription>
        도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요
        </HouseDescription>
        <hr />
        <InfoText>숙소 정보</InfoText>
        <InfoContainer>
          <InfoTitle>호스트 성별</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][5]}</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>House Type</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][6]}</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>House Size</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][7]}m<sup>2</sup></InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Price</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][8]}원</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Bathroom</InfoTitle>
          {houseInfoList[Number(id)][9] === 'Yes' ? <div>공용 화장실</div> : <div>단독 화장실</div>}
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Beds</InfoTitle>
          <InfoContent>{houseInfoList[Number(id)][10]}개</InfoContent>
        </InfoContainer>
        <InfoContainer>
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
