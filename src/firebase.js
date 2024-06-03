import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJWrxJFO1UtsaFYBB5dB940urf5fGwfjA",
  authDomain: "video-bad50.firebaseapp.com",
  projectId: "video-bad50",
  storageBucket: "video-bad50.appspot.com",
  messagingSenderId: "874099514188",
  appId: "1:874099514188:web:549290542aaba8ed50cde9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;