// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzsUrYRERUAa7JYxq-dju6fXupWwAubQc',
  authDomain: 'graphiql-appp.firebaseapp.com',
  projectId: 'graphiql-appp',
  storageBucket: 'graphiql-appp.appspot.com',
  messagingSenderId: '281460862477',
  appId: '1:281460862477:web:307233351cac0c9db7ef44',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const fbRegister = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: email,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    return err;
  }
};

export const fbLogIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};

export const fbLogOut = () => {
  signOut(auth);
};
