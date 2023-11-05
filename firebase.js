// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzR3uqRRmSoJq7xstd_MA8szVyhLpY8E",
  authDomain: "ecommerce-website-flame.firebaseapp.com",
  projectId: "ecommerce-website-flame",
  storageBucket: "ecommerce-website-flame.appspot.com",
  messagingSenderId: "293477479887",
  appId: "1:293477479887:web:1b9419dba184b7a2a54eba",
  measurementId: "G-5PP7RL5L0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);