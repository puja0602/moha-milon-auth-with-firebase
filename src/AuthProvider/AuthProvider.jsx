import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase/firebase.config';
import {signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState("")
    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signout = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
            //   console.log(currentUser)
            setUser(currentUser);

            } else {
                // console.log("logged out")
                setUser(null)
            }
          });
          return ()=>{
            unSubscribe();
          }
    },[])
    const authInfo = {
        registerUser,
        loginUser,
        user,
        setUser,
        googleLogin,
        signout
    }
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;