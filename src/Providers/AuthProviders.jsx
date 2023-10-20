/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // authProviders
    const googleAuthProvider = new GoogleAuthProvider();
    // const githubAuthProvider = new GithubAuthProvider()

    // gogole sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // sign out
    const logOut = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign out!'
        });
        if (result.isConfirmed) {
            signOut(auth);
            Swal.fire(
                'sign Out',
                'sign Out Successfully',
                'success'
            );
        }
    }


    // observe account
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        logIn,
        logOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;