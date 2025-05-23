import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdb9gG_wTnPyjoviMA25BturcWoXeILEk",
  authDomain: "movie-app-20536.firebaseapp.com",
  projectId: "movie-app-20536",
  storageBucket: "movie-app-20536.firebasestorage.app",
  messagingSenderId: "290537028530",
  appId: "1:290537028530:web:cddbaae8c7eaef3f2bc2ab",
  measurementId: "G-3CPK0RKJF4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
