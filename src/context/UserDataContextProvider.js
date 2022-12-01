import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection, getDocs, query, where,
} from 'firebase/firestore';
import { auth, db } from '../components/auth/firebase';

const useLoggedInContext = createContext();

export function UserDataContextProvider({ children }) {
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState({});

  useEffect(() => {
    const onLoggedIn = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        const q = query(collection(db, 'users'), where('uid', '==', currentuser?.uid));
        getDocs(q).then((res) => {
          const userData = res.docs[0].data();
          setcurrentLoggedInUser(userData);
          localStorage.setItem('currentLoggedInUser', JSON.stringify(userData));
        });
      } else {
        localStorage.removeItem('currentLoggedInUser');
        setcurrentLoggedInUser(null);
      }
    });

    return () => {
      onLoggedIn();
    };
  }, []);

  return (
    <useLoggedInContext.Provider
      value={{ currentLoggedInUser }}
    >
      {children}
    </useLoggedInContext.Provider>
  );
}

export function useLoggedInUserAuth() {
  return useContext(useLoggedInContext);
}
