import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA25E78gIUdAvjpU36i4s11Qdgk7aw6tTk",
  authDomain: "examen-final-99ddf.firebaseapp.com",
  projectId: "examen-final-99ddf",
  storageBucket: "examen-final-99ddf.appspot.com",
  messagingSenderId: "211986179681",
  appId: "1:211986179681:web:6b1c91e6ec7c48a0076c20"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const iniciarSesion = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const registrarUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { db, iniciarSesion, registrarUsuario, signOut };