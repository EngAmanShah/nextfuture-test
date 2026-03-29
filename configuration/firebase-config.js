import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDUYEeMFC_V-_RE9MSE8I0NmCBdu4m2d4Y",
  authDomain: "nextfuture-b1d47.firebaseapp.com",
  projectId: "nextfuture-b1d47",
  storageBucket: "nextfuture-b1d47.firebasestorage.app",
  messagingSenderId: "259928346911",
  appId: "1:259928346911:web:7ea47f685ae97c51fda02a",
  measurementId: "G-GSZ95EXMTJ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { auth, db, storage, functions };
