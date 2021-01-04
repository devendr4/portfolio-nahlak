import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCUjxum26_qlyKnNhphdcf4aK6RF8Uk5iQ",
  authDomain: "chicha-29463.firebaseapp.com",
  projectId: "chicha-29463",
  storageBucket: "chicha-29463.appspot.com",
  messagingSenderId: "6596465843",
  appId: "1:6596465843:web:894f626339753c27544cc6",
  measurementId: "G-5X824B8EW6",
};

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
