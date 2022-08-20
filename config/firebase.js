import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2mLvDt0wJHbRHrUw7cGdGfny0jjIcm1w",
  authDomain: "keyframe-359805.firebaseapp.com",
  projectId: "keyframe-359805",
  storageBucket: "keyframe-359805.appspot.com",
  messagingSenderId: "263087659155",
  appId: "1:263087659155:web:cb365a3e88f1265826d566",
  measurementId: "G-DJ6N66VQC6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
