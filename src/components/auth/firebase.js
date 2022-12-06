import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc
} from 'firebase/firestore';
import {
  getStorage,
} from 'firebase/storage';
import { toast } from 'react-toastify';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQo9EQ2y6B3JMOKmFE9xHRsKnqAPA2qvg',
  authDomain: 'dashboard-f3cd2.firebaseapp.com',
  projectId: 'dashboard-f3cd2',
  storageBucket: 'dashboard-f3cd2.appspot.com',
  messagingSenderId: '730680345447',
  appId: '1:730680345447:web:5551883b5a31ee8291a5c2',
  measurementId: 'G-W498EPQH0G',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(doc(db, 'users/' + user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};
const registerWithEmailAndPassword = async (name, email, password, downloadURL,
  continent, country, city, postCode) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
      profileURL: downloadURL,
      continent,
      country,
      city,
      postCode,
    });
  } catch (err) {
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success('Password reset link sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } catch (err) {
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  sendPasswordReset,
  logout,
  storage,
};
