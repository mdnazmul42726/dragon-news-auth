import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    // register with email, password
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email and password
    const emailSignIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with google  
    const googleSignIn = () => {
        setLoding(true);
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with github
    const githubSignIn = () => {
        setLoding(true);
        return signInWithPopup(auth, githubProvider);
    }

    // sign out
    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    // avsarver
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoding(false)
        });

        return () => unSubscribe
    }, []);



    const authentication = { user, createUser, emailSignIn, googleSignIn, githubSignIn, loding, logOut }

    return (
        <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;