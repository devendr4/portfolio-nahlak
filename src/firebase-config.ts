import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAc1tAlLVOy35DPJcvql0abI5FO-G-2XN4",
  authDomain: "devendr4.firebaseapp.com",
  databaseURL: "https://devendr4.firebaseio.com",
  projectId: "devendr4",
  storageBucket: "devendr4.appspot.com",
  messagingSenderId: "181897682852",
  appId: "1:181897682852:web:b6cedd23bc04643f076b31",
};

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
