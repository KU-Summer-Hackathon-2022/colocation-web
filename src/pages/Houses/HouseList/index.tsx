// import { db } from '../../../firebase';
import { getFirestore, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Root } from './styled';

const HouseList = () => {
  // async function getHouses(db: any) {
  //   const housesCol = collection(db, 'houses');
  //   const houseSnapshot = await getDocs(housesCol);
  //   if (houseSnapshot) {
      
  //     console.log("Document data:", houseSnapshot);
  //   } else {
      
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  //   console.log(houseSnapshot);
  //   const houseList = houseSnapshot.docs.map(doc => doc.data());
  //   return houseList;
  // }
  // const getHouses = async () => {
  //   const querySnapshot = await getDocs(collection(db, "houses"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // }

  // useEffect(() => {
  //   getHouses(db);
  //   const housesCol = collection(db, 'houses');
  //   // console.log(getDoc(housesCol));
  //   const docRef = doc(db, 'houses/1');
  //   console.log(doc(db, 'houses/1'));
  //   const docSnap = getDoc(docRef);
  //   console.log(docSnap);
  //   // console.log(collection(db, 'houses'));
  // }, [])
  
  const [houses, setHouses] = useState([]);
  return (
    <Root>
      <h2>House List</h2>

    </Root>
  );
};

export default HouseList;
