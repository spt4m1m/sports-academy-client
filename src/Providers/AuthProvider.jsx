import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"

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


    const authInfo = {
        user,
        authLoading,
        setAuthLoading,
        registerUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;