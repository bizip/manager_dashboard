import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC70h_erbd6VRJjM3GmCQnNFVWZBec0x3Q',
  authDomain: 'fir-auth-article-a24d5.firebaseapp.com',
  projectId: 'fir-auth-article-a24d5',
  storageBucket: 'fir-auth-article-a24d5.appspot.com',
  messagingSenderId: '512616452919',
  appId: '1:512616452919:web:03b5ffceb375f02d5f00b2',
  measurementId: 'G-FGC7KXM0ED',
};

// Firebase storage reference
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
