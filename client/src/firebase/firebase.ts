// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  User,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsIHRC6NsRNjVWY1mbbHNPWo4yP3oCW78",
  authDomain: "art-project-6f0ab.firebaseapp.com",
  projectId: "art-project-6f0ab",
  storageBucket: "art-project-6f0ab.firebasestorage.app",
  messagingSenderId: "342035199465",
  appId: "1:342035199465:web:d03973ce82f5e7983a4778",
  measurementId: "G-N5YRYV7PXP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmail = (
  email: string,
  password: string,
  displayName: string
) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, { displayName });
    }
  );
export const logout = () => signOut(auth);
export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => onAuthStateChanged(auth, callback);
export const getCurrentUser = () => auth.currentUser;
export const getUserId = () => auth.currentUser?.uid;
