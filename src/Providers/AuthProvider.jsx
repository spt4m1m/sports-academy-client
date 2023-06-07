import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true);

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
            // get and set token
            if (loggedUser) {
                axios.post(`${import.meta.env.VITE_APP_API_URL}/jwt`, { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setAuthLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setAuthLoading(false);
            }
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