// src/Firebase/config.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuracion de t proyecto Firebase
const fireBaseConfig = {
  apiKey: "AIzaSyCDclqIrONBlXI9i-JMjIKSZzARGEVoCxs",
  authDomain: "contacts-fire-70569.firebaseapp.com",
  projectId: "contacts-fire-70569",
  storageBucket: "contacts-fire-70569.firebasestorage.app",
  messagingSenderId: "432693793505",
  appId: "1:432693793505:web:e387d89ccc7d60c62ddda0"
};

//inicializa la App
export const firebaseApp = initializeApp(fireBaseConfig)


//inicializa los servicios 
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)