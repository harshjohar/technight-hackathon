// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCqLb8HDgY0zRoLsE2en8mDvmggeKSY28U",
    authDomain: "technight-ca4ef.firebaseapp.com",
    projectId: "technight-ca4ef",
    storageBucket: "technight-ca4ef.appspot.com",
    messagingSenderId: "787654262347",
    appId: "1:787654262347:web:e032f71e4bb5f5a1bed7ce",
    measurementId: "G-V5GJV4E61C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { analytics, db, auth, storage };
