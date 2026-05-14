import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgTH0LJV_z2-0_TtgadfIoRAlxYz82qzM",
  authDomain: "litto-base44-app.firebaseapp.com",
  projectId: "litto-base44-app",
  storageBucket: "litto-base44-app.firebasestorage.app",
  messagingSenderId: "337884519758",
  appId: "1:337884519758:web:86d75e31fbc88a516dd21f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);