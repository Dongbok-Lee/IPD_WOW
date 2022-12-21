import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAuth } from 'firebase/auth';
import "firebase/firestore"
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCYMTo7lDdNJpWJ-6ERefWp1LdH3qPyjs0",
    authDomain: "wowproject-b60c1.firebaseapp.com",
    projectId: "wowproject-b60c1",
    storageBucket: "wowproject-b60c1.appspot.com",
    messagingSenderId: "922681611867",
    appId: "1:922681611867:web:c77f706200627422e3117e",
    measurementId: "G-J2D05PWZ5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);
export { app, auth, db, storage};