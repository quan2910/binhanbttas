import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD90FGBMjYHIVJ8THE4paD9ulWaiz2IepA",
  authDomain: "binhanbt-b3974.firebaseapp.com",
  projectId: "binhanbt-b3974",
  storageBucket: "binhanbt-b3974.appspot.com",
  messagingSenderId: "719067629387",
  appId: "1:719067629387:web:a2aa549f0f5aea1667cace",
  measurementId: "G-Y79THHCPS8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
