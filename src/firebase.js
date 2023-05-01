// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_APP_ID
};

// const firebaseConfig = {
//     apiKey: 'AIzaSyC-sRaazWJLWJf1haLbajhxQl6kHY1BMEE',
//     authDomain: 'netflix-d1fcd.firebaseapp.com',
//     projectId: 'netflix-d1fcd',
//     storageBucket: 'netflix-d1fcd.appspot.com',
//     messagingSenderId: '46301368242',
//     appId: '1:46301368242:web:c85fc8e570399c1e905eab'
//   };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)