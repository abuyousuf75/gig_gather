import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { PropTypes } from "prop-types";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [featuredSession, setFeaturedSession] = useState([]);
const [speakers, setSpeakers] = useState([]);
const [user, setUser] = useState(null);

// Sign up new users

const creteUser = (email,password) =>{
  return   createUserWithEmailAndPassword(auth, email, password);
}


// Login existing user
const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
   
// login with google
 const googleProvider = new GoogleAuthProvider();

 const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
 }

 // github login 
 const githubProvider = new GithubAuthProvider();

 const githubLogin = () =>{
    return signInWithPopup(auth,githubProvider);
 }

 // logOut user
 const logOut = () =>{
    return signOut(auth);
 }



// on auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,cUser =>{
            console.log('obseeving user' , cUser)
            setUser(cUser);
        });
        return() => {
            unSubscribe();
        }
    },[])

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
        featuredSession,speakers,creteUser,user,loginUser,googleLogin,logOut, githubLogin 
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