// src/firebase/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, firebaseApp } from './config'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from "./config";
import { async } from '@firebase/util';
import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useStoreAuth = defineStore("auth", () => {
  const user = ref(null)
  const isGuest = ref(false)
  const auth = getAuth(firebaseApp)


  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
  })

  const LoginAsGuest = () =>  {
    isGuest.value = true
  }

  const Logout = async () => {
    await signOut(auth)
    user.value = null
    isGuest.value = false
  }


  return {
    user,
    isGuest,
     LoginAsGuest,
     Logout
  }
})


export const registerUser = async (email, password,firstName,lastName) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  const user = cred.user;

   // Guardar datos adicionales en Firestore
  await setDoc(doc(db, "users", user.uid), {
    firstName: firstName,
    lastName: lastName,
    email: email,
    createdAt: new Date()
  });



  return cred.user
}

export const loginUser = async (email, password) => {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  const user = cred.user;

  const userRef = doc(db, "users", user.uid);
  const userSanp = await getDoc(userRef);


  if(userSanp.exists()){
    return{user, userData: userSanp.data()}
  }else{
    return{user, userData: null}
  }
}

export const logoutUser = async () => {
  await signOut(auth)
}
