import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const Authinfo = createContext(null)

const Authprovider = ({children}) => {

    const [error, setError] = useState('')

        
    const handleRegister = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const info = {
        handleRegister,
        error,
        setError,
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