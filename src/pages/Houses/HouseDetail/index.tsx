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
// - 12 : 집 설명
  const houseInfoList = [
    ["0", "대한민국 충청남도 예산군 오촌리 한옥", "36.72025330080758", "126.80161084451493", "대한민국 충청남도 예산군 오촌리 한옥", "남자", "단독주택", "94", "212,808", "No", "2", "No", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["1", "대한민국 경상북도 예천군 미석리 단독주택", "36.74657477478244", "128.56223004733508", "대한민국 경상북도 예천군 미석리 단독주택", "남자", "기타", "28", "65,062", "No", "4", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["2", "대한민국 경상북도 성주군 자양리 진달래아파트 103동 1104호", "35.95638732965905", "128.24250824396978", "대한민국 경상북도 성주군 자양리 진달래아파트 103동 1104호", "남자", "단독주택", "27", "138,257", "Yes", "2", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["3", "대한민국 경상북도 봉화군 설매리 단독주택", "36.831400821355416", "128.72396228670647", "대한민국 경상북도 봉화군 설매리 단독주택", "여자", "단독주택", "69", "70,484", "Yes", "1", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["4", "대한민국 경기도 용인시 수지구 단독주택", "37.34812949352725", "127.07199945464953", "대한민국 경기도 용인시 수지구 단독주택", "여자", "단독주택", "98", "66,418", "No", "4", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["5", "대한민국 충청북도 음성군 병암리 단독주택", "37.02107496203536", "127.59326716553706", "대한민국 충청북도 음성군 병암리 단독주택", "남자", "단독주택", "19", "158,589", "Yes", "2", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["6", "대한민국 충청북도 영동군 돈대리 해바라기아파트 101동 1113호", "36.16717441040339", "127.90039910025969", "대한민국 충청북도 영동군 돈대리 해바라기아파트 101동 1113호", "여자", "아파트", "70", "207,386", "Yes", "4", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["7", "대한민국 경상북도 예천군 무지리 단독주택", "36.60702251885442", "128.3173711393743", "대한민국 경상북도 예천군 무지리 단독주택", "여자", "단독주택", "84", "174,855", "No", "3", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["8", "대한민국 경상북도 울진군 후포리 단독주택", "36.6656738270248", "129.47205961406294", "대한민국 경상북도 울진군 후포리 단독주택", "여자", "단독주택", "22", "131,480", "No", "4", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["9", "대한민국 경상북도 울진군 삼근리 쌍용아파트 108동 1114호", "36.89720350991671", "129.26793055516654", "대한민국 경상북도 울진군 삼근리 쌍용아파트 108동 1114호", "여자", "기타", "87", "145,035", "No", "4", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["10", "대한민국 경상남도 함양군 원산리 단독주택", "35.582343688323746", "127.68018492793648", "대한민국 경상남도 함양군 원산리 단독주택", "남자", "단독주택", "57", "206,031", "No", "2", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["11", "대한민국 전라남도 구례군 중대리 한옥", "35.156635680941505", "127.59268221121975", "대한민국 전라남도 구례군 중대리 한옥", "여자", "아파트", "79", "132,836", "Yes", "2", "No", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["12", "대한민국 충청북도 단양군 연곡리 단독주택", "37.106720820717825", "128.2989316435201", "대한민국 충청북도 단양군 연곡리 단독주택", "남자", "아파트", "69", "159,945", "Yes", "2", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["13", "대한민국 전라남도 보성군 오봉리 한옥", "34.73907067215209", "127.20370797111568", "대한민국 전라남도 보성군 오봉리 한옥", "남자", "기타", "39", "85,394", "No", "3", "No", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["14", "대한민국 경상북도 청송군 개일리 단독주택", "36.262363428781384", "129.0312439598046", "대한민국 경상북도 청송군 개일리 단독주택", "여자", "기타", "53", "85,394", "No", "2", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["15", "대한민국 경상남도 함안군 춘곡리 행복아파트 101동 1115호", "35.24998173504081", "128.37394783495535", "대한민국 경상남도 함안군 춘곡리 행복아파트 101동 1115호", "남자", "기타", "79", "112,504", "No", "3", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["16", "대한민국 경상북도 포항시 석계리 한옥", "36.237034588242196", "129.14858126655517", "대한민국 경상북도 포항시 석계리 한옥", "남자", "단독주택", "11", "215,519", "No", "1", "Yes", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["17", "대한민국 강원도 인제군 용대리 한옥", "38.192816151844305", "128.38334984873745", "대한민국 강원도 인제군 용대리 한옥", "여자", "기타", "34", "229,074", "Yes", "4", "Yes", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["18", "대한민국 경상남도 양산시 외석리 단독주택", "35.453847571813085", "129.05195337778812", "대한민국 경상남도 양산시 외석리 단독주택", "남자", "아파트", "26", "146,390", "Yes", "1", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["19", "대한민국 경상북도 포항시 남구 한옥", "35.98373741960251", "129.55533955410388", "대한민국 경상북도 포항시 남구 한옥", "여자", "단독주택", "57", "199,254", "No", "1", "No", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["20", "대한민국 강원도 영월군 토교리 단독주택", "37.15952257814335", "128.30555087024817", "대한민국 강원도 영월군 토교리 단독주택", "남자", "단독주택", "32", "55,574", "No", "4", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["21", "대한민국 경상북도 성주군 봉양리 단독주택", "35.82977013629117", "128.16699930952078", "대한민국 경상북도 성주군 봉양리 단독주택", "남자", "단독주택", "45", "54,218", "Yes", "2", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["22", "대한민국 전라남도 곡성군 호곡리 한옥", "35.272671287980884", "127.33379055025385", "대한민국 전라남도 곡성군 호곡리 한옥", "남자", "단독주택", "87", "119,281", "No", "4", "No", "도심 한 가운데 있는 현대적이고 실용적인 단독주택입니다. 최대 4인까지 편안하고 실용적인 여행이 가능하고, 주변 맛집들과 산책길 잔디 위 소풍을 즐길 수 있는 숙소로, 작은 마당에서 맥주 한잔 마실 수 있는 여유와 편안함을 제공합니다."],
    ["23", "대한민국 전라남도 고흥군 신곡리 단독주택", "34.68374732620239", "127.424062773638", "대한민국 전라남도 고흥군 신곡리 단독주택", "여자", "기타", "73", "104,371", "No", "4", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["24", "대한민국 전라남도 신안군 송곡리 해바라기아파트 106동 1105호", "34.86019134024126", "126.134686089946", "대한민국 전라남도 신안군 송곡리 해바라기아파트 106동 1105호", "남자", "기타", "33", "267,027", "No", "2", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["25", "대한민국 전라남도 무안군 용산리 진달래아파트 103동 1101호", "34.859059949446326", "126.51761368154203", "대한민국 전라남도 무안군 용산리 진달래아파트 103동 1101호", "여자", "단독주택", "53", "132,836", "Yes", "4", "Yes", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["26", "대한민국 경기도 용인시 처인구 해바라기아파트 104동 1101호", "37.22833990523791", "127.24985625649938", "대한민국 경기도 용인시 처인구 해바라기아파트 104동 1101호", "남자", "아파트", "50", "162,656", "Yes", "4", "No", "도시 외곽의 아파트입니다. 다양한 문화시설과 정거장이 존재하고, 조용하고, 주차시설도 완비되어 있습니다. "],
    ["27", "대한민국 충청북도 청주시 흥덕구 단독주택", "36.64702031789108", "127.44262741674619", "대한민국 충청북도 청주시 흥덕구 단독주택", "남자", "기타", "95", "109,793", "No", "1", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["28", "대한민국 경기도 가평군 운악리 단독주택", "37.89839462576741", "127.36324750367868", "대한민국 경기도 가평군 운악리 단독주택", "여자", "기타", "54", "197,898", "No", "4", "Yes", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
    ["29", "대한민국 전라남도 해남군 평호리 단독주택", "34.411665138622006", "126.45581519047235", "대한민국 전라남도 해남군 평호리 단독주택", "여자", "단독주택", "29", "226,363", "No", "3", "No", "도시 한가운데 있는 한옥의 문을 열고 들어가면 빌딩 숲은 온데간데 사라지고 완전히 다른 풍경이 펼쳐집니다. 이곳에서 마치 살아보는 것처럼 일상을 누려보면 서울은 어느새 완전히 새로운 곳이 됩니다. 에어비앤비·서울관광재단과 함께 일상을 여행처럼, 여행은 일상처럼 한옥에서 살아보는 즐거움을 느껴보세요"],
]
  return (
    <Root>
      <SimpleSlider id={id} />
      <div style={{height: '30px'}}></div>
      {id && <>
        <HouseTitle>{houseInfoList[Number(id)][1]}</HouseTitle>
        <hr />
        <HouseDescription>{houseInfoList[Number(id)][12]}</HouseDescription>
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
