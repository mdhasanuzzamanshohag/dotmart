import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    };
    const facebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
      return signInWithPopup(auth, facebookProvider);
    };

     const logOut = () => {
       setLoading(true);
       return signOut(auth);
     };


    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      return () => {
        unSubscribe();
      };
    }, []);

    const userInfo = {
      user,
      createUser,
      loading,
      setLoading,
      loginUser,
      logOut,
      googleLogin,
      facebookLogin,
    };
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;