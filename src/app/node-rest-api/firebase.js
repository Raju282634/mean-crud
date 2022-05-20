// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAclpNPE7VoTmawXyzLZYLCPbqkfa_DRW4",
  authDomain: "mean-crud-309dd.firebaseapp.com",
  projectId: "mean-crud-309dd",
  storageBucket: "mean-crud-309dd.appspot.com",
  messagingSenderId: "153863412349",
  appId: "1:153863412349:web:d7781bd2e84450ed636f14",
  measurementId: "G-S3KNH61HV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
