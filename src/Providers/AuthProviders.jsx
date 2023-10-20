/* eslint-disable react/prop-types */
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
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

    const authInfo = {
        user,
        loading,
        googleSignIn

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