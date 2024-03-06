import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvZlB8UW5NQGPssNKOx_uLRXtpbIQEFVc",
  authDomain: "olx-react-f719d.firebaseapp.com",
  projectId: "olx-react-f719d",
  storageBucket: "olx-react-f719d.appspot.com",
  messagingSenderId: "832762424947",
  appId: "1:832762424947:web:9b7ed4ccbbc418a37f4406",
  measurementId: "G-W1E1ZN0L6Z"
};

export default firebase.initializeApp(firebaseConfig);
 
