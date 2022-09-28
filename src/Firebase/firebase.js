import firebase from 'firebase/compat/app'

import "firebase/compat/firestore"
// import * from "firebase/auth"
import "firebase/compat/auth"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDTvmFCMEIJ6X9LAaQMq591RiR__EzwphE",
    authDomain: "berkdb-460f0.firebaseapp.com",
    projectId: "berkdb-460f0",
    storageBucket: "berkdb-460f0.appspot.com",
    messagingSenderId: "662364554469",
    appId: "1:662364554469:web:1078f571dc6a98f33c400c"
  });

export const fire=firebaseConfig;