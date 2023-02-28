import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAbL9PmNtOSmqy6yjKwDwqfs3y_q8Nf2eI",
    authDomain: "bad-habit-breaker-cbb67.firebaseapp.com",
    projectId: "bad-habit-breaker-cbb67",
    storageBucket: "bad-habit-breaker-cbb67.appspot.com",
    messagingSenderId: "633173531779",
    appId: "1:633173531779:web:d999e669fd0208f9518fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);