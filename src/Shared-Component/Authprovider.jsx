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
  const [loading, setLoading] = useState(true)
  const [userinfo, setUserinfo] = useState({});
  const [ids, setIds] = useState('')
  


  const handleRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGooglesignin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogoutuser = ()=> {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      const email = user?.email;
      const pic = user?.photoURL;
      const name = user?.displayName;
      const userinfoo = { email, pic, name};
      setUserinfo(userinfoo);
      setLoading(false)
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
    loading,
    setLoading,
    setIds,
    ids,
    
  };
  console.log(user);
  return <Authinfo.Provider value={info}>{children}</Authinfo.Provider>;
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;
