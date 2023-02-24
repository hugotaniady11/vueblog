import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import 'firebase/firestore'

const apiKey = process.env.VUE_apiKey;
const authDomain = process.env.VUE_authDomain;
const messaging = process.env.VUE_messagingSenderId;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: "vueblog-f6250",
    storageBucket: "vueblog-f6250.appspot.com",
    messagingSenderId: messaging,
    appId: "1:854308216633:web:f4dac87cf052ff0a2912e8"
  };

  const firebase = initializeApp(firebaseConfig);
  const db = getFirestore(firebase);

  export { db, collection, getDocs, getAuth, getDoc, doc, deleteDoc }