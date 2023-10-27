// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCncNtgYp_sJJiS-GSm_iR4mrSXT76tXGo",
  authDomain: "myblog-5846b.firebaseapp.com",
  projectId: "myblog-5846b",
  storageBucket: "myblog-5846b.appspot.com",
  messagingSenderId: "600303863065",
  appId: "1:600303863065:web:e8312e447cf1c38db53188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firedb,auth,storage};