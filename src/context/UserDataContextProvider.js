import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/auth/firebase';

const useLoggedInContext = createContext();

export function UserDataContextProvider({ children }) {
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState({});

  useEffect(() => {
    const onLoggedIn = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        localStorage.setItem('currentLoggedInUser', JSON.stringify(currentuser));
        setcurrentLoggedInUser(currentuser);
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
