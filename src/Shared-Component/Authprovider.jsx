import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../Firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const Authinfo = createContext(null);

const Authprovider = ({ children }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [userinfo, setUserinfo] = useState({});

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGooglesignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogoutuser = ()=> {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      const email = user.email;
      const pic = user.photoURL;
      const userinfoo = { email, pic};
      setUserinfo(userinfoo);
      setUser(user);
    });
    return unSubscribe;
  }, []);

  const info = {
    handleRegister,
    error,
    setError,
    handleLogin,
    handleGooglesignin,
    user,
    userinfo,
    handleLogoutuser,
  };
  console.log(user);
  return <Authinfo.Provider value={info}>{children}</Authinfo.Provider>;
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;
