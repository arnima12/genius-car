import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [success,setSuccess] = useState(false);
    const [userEmail,setUserEmail] = useState('');

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
        .then(() => {
          alert('Please verify your email')
        });
    }
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
        
    }
    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log("userEmail",email);
    }
    const resetPassword = () => {
        return sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          alert('reset password');
        })
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
        
    }
    const logOut = () =>{
        return signOut(auth).then(() => {
            alert("Sign-out successful.");
          })
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unSubscribe();
        }
    })
    // pass:iUMgGbekqbuC33e
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        success,
        setSuccess,
        verifyEmail,
        resetPassword,
        handleEmailBlur,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;