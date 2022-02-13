import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMtdncd6CeAfSFzDRhEXHfPZCQ0vnoOHY",
  authDomain: "clone-811d0.firebaseapp.com",
  projectId: "clone-811d0",
  storageBucket: "clone-811d0.appspot.com",
  messagingSenderId: "3681369153",
  appId: "1:3681369153:web:c3c182c293d7de4dd31ac0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };