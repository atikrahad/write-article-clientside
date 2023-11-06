import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { auth } from "../Firebase/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
export const Authinfo = createContext(null)

const Authprovider = ({children}) => {

    const [error, setError] = useState('')

        
    const handleRegister = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const handleLogin = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGooglesignin = ()=> {
        return signInWithPopup(auth, googleProvider)
    }

    const info = {
        handleRegister,
        error,
        setError,
        handleLogin,
        handleGooglesignin,
    }
    return (
        <Authinfo.Provider value={info}>
            {children}
        </Authinfo.Provider>
    );
};
Authprovider.propTypes = {
    children: PropTypes.node
}
export default Authprovider;