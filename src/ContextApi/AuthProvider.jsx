import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [featuredSession, setFeaturedSession] = useState([])
    // load json data for first pages

    useEffect(()=>{
        fetch('/Features.json')
        .then(res => res.json())
        .then(data => setFeaturedSession(data))
    },[])

    const authInfo = {
        featuredSession,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
  }
export default AuthProvider;