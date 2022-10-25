import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {
  const { logged, logout, login } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return logout();

      const { uid, email, displayName, photoURL } = user;

      login({ uid, email, displayName, photoURL });
    });
  }, []);

  return {
    logged,
  };
};
