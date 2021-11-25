import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // Google sign in
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  // Github sign in
  const signInWithGithub = () => {
    setIsLoading(true);
    const githubProvider = new GithubAuthProvider();

    return signInWithPopup(auth, githubProvider);
  };

  // Process login with email and pass
  const processLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Create user with EmailPassword
  const createNewUser = (name, email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  update name in firebase
  const updateName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("Name Updated");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // Sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
        setSuccess("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    success,
    isLoading,
    setUser,
    setError,
    setSuccess,
    setIsLoading,
    updateName,
    signInWithGoogle,
    signInWithGithub,
    createNewUser,
    processLogin,
    logOut
  };
};

export default useFirebase;
