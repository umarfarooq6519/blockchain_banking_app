import { useEffect, useState } from "react";

import { getAuth, sendSignInLinkToEmail, signOut } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import app from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const actionCodeSettings = {
  url: "http://localhost:5173/",
  handleCodeInApp: true,
};

function useAuth() {
  // manage all auth functionality
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // check the current user
      if (currentUser) setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    provider.setCustomParameters({
      prompt: "select_account", // prompt users to select an account
    });

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      console.log(result);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const signinWithEmail = async (email) => {
    setIsLoading(true);
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("signinEmail", email);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const Signout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out");
      return true;
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    setError,
    signInWithGoogle,
    signinWithEmail,
    Signout,
  };
}

export default useAuth;
