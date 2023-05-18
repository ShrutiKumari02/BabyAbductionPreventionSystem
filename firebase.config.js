// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOBncFpssi5P3Pr-qYW3wsUM9vo6bq1o0",
  authDomain: "smartsystem-data.firebaseapp.com",
  databaseURL: "https://smartsystem-data-default-rtdb.firebaseio.com",
  projectId: "smartsystem-data",
  storageBucket: "smartsystem-data.appspot.com",
  messagingSenderId: "359822054843",
  appId: "1:359822054843:web:204f9c5c51aa9c1d0ae09e",
  measurementId: "G-0QQXHYV2XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();


export default app;
