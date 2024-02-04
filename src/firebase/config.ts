import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfr2j99dlrxCQWcTaWFpravHkRFjHzqtY",
  authDomain: "heroes-app-4587e.firebaseapp.com",
  projectId: "heroes-app-4587e",
  storageBucket: "heroes-app-4587e.appspot.com",
  messagingSenderId: "885043557894",
  appId: "1:885043557894:web:8644735d370f88fddf3587",
};

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
