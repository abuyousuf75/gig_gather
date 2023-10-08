import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [featuredSession, setFeaturedSession] = useState([]);
const [speakers, setSpeakers] = useState([]);

    // load json data for first pages services
    useEffect(()=>{
        fetch('/Features.json')
        .then(res => res.json())
        .then(data => setFeaturedSession(data))
    },[])

    // load json data for speakers 
    useEffect(()=>{
        fetch('/Speaker.json')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    },[])

    const authInfo = {
        featuredSession,speakers
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