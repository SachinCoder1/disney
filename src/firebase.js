import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
// import 'firebase/compat/'
// import {doc} from "./firebase";

 
const firebaseConfig = {
  apiKey: "AIzaSyD7e0VbkQTXMjCeZSfTg0zqYLgnnaGZkdw",
  authDomain: "movies-54b19.firebaseapp.com",
  databaseURL: "https://movies-54b19-default-rtdb.firebaseio.com",
  projectId: "movies-54b19",
  storageBucket: "movies-54b19.appspot.com",
  messagingSenderId: "744336612744",
  appId: "1:744336612744:web:c7b4817a9db108ded9ee3d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
