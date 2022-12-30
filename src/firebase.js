import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyCPInOElpwlnvnsr8d0dSXTzCERJKdv5jc",
    authDomain: "netflix-clone-4398d.firebaseapp.com",
    projectId: "netflix-clone-4398d",
    storageBucket: "netflix-clone-4398d.appspot.com",
    messagingSenderId: "938783788963",
    appId: "1:938783788963:web:9db47ed2f0fab743c59416"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
let currentUser = undefined;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
});

const db = getFirestore(app);



export { auth, currentUser, db };

