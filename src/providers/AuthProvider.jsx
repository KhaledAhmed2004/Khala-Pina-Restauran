import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../config/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const values = { createUser, loginWithEmail, user };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
