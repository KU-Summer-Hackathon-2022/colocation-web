import { Root } from './styled';
import axios from "axios";
import {useEffect, useState} from 'react';

const HouseList = () => {
  const [roomList, setRoomList] = useState<any | undefined>([]);
  const [room, setRoom] = useState<any | undefined>();
  const getRooms = () => {
    axios.get("http://ec2-15-164-97-131.ap-northeast-2.compute.amazonaws.com:8080/rooms/")
    .then((response) => {
      console.log(response.data);
      console.log(response.data[0].name);
      setRoomList(response.data);
      setRoom(response.data[0]);
    })
  }
  useEffect(() => {
    getRooms();
  }, [])

  useEffect(() => {
    room && console.log(room.name);
  }, [room]);

  return (
    <Root>
      <h2>House List</h2>
      <div>{room && room.name}</div>
      {roomList && roomList.map((value:any, index:any) => 
        <div key={index}>{value.name}</div>
      )}
    </Root>
  );
};

export default HouseList;
