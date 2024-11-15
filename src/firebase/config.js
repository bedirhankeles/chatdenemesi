import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzvOgR-i7mlMaScht0L7y3YvoCNBPkWUk",
  authDomain: "blog-vue3-7fee9.firebaseapp.com",
  projectId: "blog-vue3-7fee9",
  storageBucket: "blog-vue3-7fee9.firebasestorage.app",
  messagingSenderId: "710899817605",
  appId: "1:710899817605:web:75f530e62394b0676dddec"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };