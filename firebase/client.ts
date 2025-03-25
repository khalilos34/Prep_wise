// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSBGtS8o2n4acuTreZ7KnMFgoDnUBRCeQ",
  authDomain: "prepwise-6c3bf.firebaseapp.com",
  projectId: "prepwise-6c3bf",
  storageBucket: "prepwise-6c3bf.firebasestorage.app",
  messagingSenderId: "276518190696",
  appId: "1:276518190696:web:abbb703fb644372a7945dd",
  measurementId: "G-1D2BF8QXX9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
