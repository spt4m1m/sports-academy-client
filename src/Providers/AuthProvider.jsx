import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(false);

    // register user
    const registerUser = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile 
    const updateUserProfile = (user, name, photoUrl) => {
        setAuthLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl,
        })
    }

    // login user
    const loginUser = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logout user 
    const logOut = () => {
        setAuthLoading(true);
        return signOut(auth);
    }

    // observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setAuthLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        authLoading,
        setAuthLoading,
        registerUser,
        updateUserProfile,
        loginUser,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;