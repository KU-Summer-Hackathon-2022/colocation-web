import styled from 'styled-components';

const Root = styled.div`
  background-color: white;
`;

const HouseTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const HouseDescription = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
`

const InfoText = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: x-large;
  font-weight: bold;
  color: #005691;
  
`

const InfoTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const InfoTitle = styled.div`
  font-weight: bold;
  margin-left: 5px;
  margin-right: 10px;
`;

const InfoContent = styled.div`
  margin-right: 10px;
`;

const HostContainer = styled.div`
  display: flex;
  margin-left: 10px;
`

const HostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  margin-right: 20px;
`;

const ReviewText = styled.div`
  display: flex;
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: x-large;
  font-weight: bold;
  color: #005691;
`;

const ReviewContainer = styled.div`
  margin-left: 20px;
`;

const ReviewTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const ReviewContent = styled.div`
  margin-right: 10px;
`;

export { Root, HouseTitle, HouseDescription, InfoContainer, InfoTitleContainer, InfoText, InfoTitle, InfoContent, HostContainer, HostTextContainer, ReviewText, ReviewContainer, ReviewTitle, ReviewContent };

