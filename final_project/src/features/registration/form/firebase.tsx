// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppDispatch } from "@/app/store";
import { setAlertText, showAlert } from "@/features/alert/alertSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { setSignedIn, showForm } from "../registerSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const imp = import.meta.env;

const firebaseConfig = {
  apiKey: imp.VITE_API_KEY,
  authDomain: imp.VITE_AUTH_DOMAIN,
  projectId: imp.VITE_PROJECT_ID,
  storageBucket: imp.VITE_STORAGE_BUCKET,
  messagingSenderId: imp.VITE_MESSAGING_SENDER_ID,
  appId: imp.VITE_APP_ID,
  measurementId: imp.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const handleGoogleSignIn = async (dispatch: Dispatch) => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    console.log("Google user:", user);

    const { displayName } = user;
    localStorage.setItem("userName", `${displayName}`);
    localStorage.setItem("signedIn", "true");
    dispatch(setSignedIn(true));
    dispatch(showForm(false));
    dispatch(setAlertText("You successfully signed in"));
    dispatch(showAlert(true));
  } catch (error) {
    console.error("Google sign-in error:", error);
    dispatch(setAlertText("Sign-in failed, try again!"));
    dispatch(showAlert(true));
  }
};
