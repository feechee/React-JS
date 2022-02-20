
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyCEn2g2ah80-lVPfME317aGj5J3Qg7lT84",
  authDomain: "trep-ar.firebaseapp.com",
  projectId: "trep-ar",
  storageBucket: "trep-ar.appspot.com",
  messagingSenderId: "609559573653",
  appId: "1:609559573653:web:e5ded092de33836df2579c",
  measurementId: "G-T08N7K76NV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);