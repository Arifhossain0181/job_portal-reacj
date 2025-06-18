import React, { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, Password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, Password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      console.log("state caPtured ,", currentuser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const signin = (email, Password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, Password);
  };

  const signOuts = () => {
    setloading(true);
    return signOut(auth);
  };
  const signinwithgoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const authinfo = {
    user,
    loading,
    createuser,
    signin,
    signOuts,
    signinwithgoogle,
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
