import { initializeApp } from "firebase/app";

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

initializeApp(firebaseConfig);
