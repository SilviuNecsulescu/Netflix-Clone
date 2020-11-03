import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkOBwNf-CT3aF2VsEiG_-84MT_w6XeX0k",
  authDomain: "netflix-clone-b1066.firebaseapp.com",
  databaseURL: "https://netflix-clone-b1066.firebaseio.com",
  projectId: "netflix-clone-b1066",
  storageBucket: "netflix-clone-b1066.appspot.com",
  messagingSenderId: "1095130913025",
  appId: "1:1095130913025:web:41b5094b593801a3502300",
  measurementId: "G-VWJHXLYNHK",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
