import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKs3nPiJxqAm-jo65NCmV7mH0ocYLbNn8",
  authDomain: "quizapp-82877.firebaseapp.com",
  projectId: "quizapp-82877",
  storageBucket: "quizapp-82877.appspot.com",
  messagingSenderId: "430573174125",
  appId: "1:430573174125:web:82ac8251082b10873aee64",
  measurementId: "G-ZMPSE5FCC7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);