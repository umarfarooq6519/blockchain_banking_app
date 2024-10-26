import { useEffect, useState } from "react";

import { getAuth, signOut } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import app from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function useAuth() {
  // manage all auth functionality
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return { user, isLoading, signInWithGoogle, Signout };
}

export default useAuth;
