// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instancia de firebase Authentication
export const auth = getAuth(app);

// Instancia de firestore Database
const db = getFirestore(app);

// Instancia de cloud storage

const storage = getStorage(app);

// Autenticación con google

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  return userCredential;
}

// Registro de usuarios con correo y contraseña

export async function registerUser({ email, password }) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
}

// Inicio de sesión con correo y contraseña

export async function loginUser({ email, password }) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
}

// Cierre de sesión
export async function logout() {
  await auth.signOut();
}

// Crear un usuario en la DB

export async function createUser(user) {
  const docRef = doc(db, 'users', user.uid);
  const docListRef = doc(db, 'lists', user.uid);
  await setDoc(docRef, user);
  await setDoc(docListRef, {
    creationTime: Date.now(),
    uid: user.uid,
    lists: [],
  });
}

// Crear una lista en la DB

export async function createListsObj(uid, list) {
  const docRef = doc(db, 'lists', uid);
  await setDoc(docRef, list);
}

// Obtener la información de un usuario en la DB

export async function getUserData(uid) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// Obtener la información de una lista

export async function getLists(uid) {
  const docRef = doc(db, 'lists', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// Actualizar la información de un usuario de la DB

export async function updateUserData(uid, data) {
  const docRef = doc(db, 'users', uid);
  await updateDoc(docRef, data);
}

// Agregar una lista al documento de un usuario

export async function addList(uid, data) {
  const docRef = doc(db, 'lists', uid);
  await updateDoc(docRef, {
    lists: arrayUnion(data),
  });
}

// Agregar una película a una lista específica

export async function changeList(uid, data) {
  const docRef = doc(db, 'lists', uid);
  await updateDoc(docRef, {
    lists: data,
  });
}

/* Funciones de cloud storage */

// Subir un archivo tipo file a un bucket de storage

export async function setProfilePhoto(uid, image) {
  const imageRef = ref(storage, `images/${uid}`);
  const url = await uploadBytes(imageRef, image);

  return url.metadata.fullPath;
}

// Obtener el link de descarga del archivo

export async function getProfilePhotoUrl(path) {
  const imageRef = ref(storage, path);
  const url = await getDownloadURL(imageRef);
  return url;
}
