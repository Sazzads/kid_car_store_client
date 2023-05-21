import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [show, setShow] = useState('')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const creteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => {
            console.log("Profile updated successfully.");
            setShow("REGISTER IS COMPLETED SUCCESSFULLY");
        }).catch((error) => {
            console.log("Error updating profile: ", error);
        });
        logOut()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    //google register
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }
    //google sign in
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        show,
        creteUser,
        signIn,
        logOut,
        createUserGoogle,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;