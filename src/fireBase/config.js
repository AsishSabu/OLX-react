import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCk_yvZCkiZHOWcmfUYsDej7_wjsMHED3g",
  authDomain: "olx-clone-8fb3c.firebaseapp.com",
  projectId: "olx-clone-8fb3c",
  storageBucket: "olx-clone-8fb3c.appspot.com",
  messagingSenderId: "521728138319",
  appId: "1:521728138319:web:65a71a2a4ee20186585e3a",
  measurementId: "G-X9HH3EW211"
};

export default firebase.initializeApp(firebaseConfig);
 
