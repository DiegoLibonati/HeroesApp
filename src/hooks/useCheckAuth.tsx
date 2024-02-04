import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = (): string => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return authContext?.logout();

      const { uid, email, displayName, photoURL } = user;

      authContext?.login({
        ok: true,
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL: photoURL,
      });
    });
  }, []);

  return authContext?.logged as string;
};
