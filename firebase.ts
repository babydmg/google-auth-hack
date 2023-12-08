import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ0M9RwHSzJ9iRc_p_nB9Lcy4ugPcLbFQ',
  authDomain: 'login-dad8c.firebaseapp.com',
  projectId: 'login-dad8c',
  storageBucket: 'login-dad8c.appspot.com',
  messagingSenderId: '250966501429',
  appId: '1:250966501429:web:a30814e09cd744b46e697c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
