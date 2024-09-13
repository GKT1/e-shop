// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr5M2iWmqGWDMueCgrHoZw29ASTsz64XA",
  authDomain: "ecom-228af.firebaseapp.com",
  projectId: "ecom-228af",
  storageBucket: "ecom-228af.appspot.com",
  messagingSenderId: "872794926608",
  appId: "1:872794926608:web:f6977aa3cebe0ccb7d2495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}