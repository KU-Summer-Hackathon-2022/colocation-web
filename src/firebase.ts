// import * as firebase from "firebase/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// const app = firebase.initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.REGION.firebaseio.com",
  databaseURL: "https://colocation-d7cee-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
// export default database = getDatabase(app);
export default firebaseConfig;

