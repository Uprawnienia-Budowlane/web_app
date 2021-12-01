import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc, getDocs } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import 'firebase/firestore'
import { firestore } from "firebase-admin";

const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

/*const CreateQuiz = (currentQuizId, title) => {
return  firestore().collection('quizy').doc(currentQuizId).set({
currentQuizId,
title,
})
}*/

/* const db = getFirestore().collection('uzytkownicy') */
/* const quiz_db = getFirestore().collection('quizy') */

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db_users = getFirestore()
export default {app, db_users} 
