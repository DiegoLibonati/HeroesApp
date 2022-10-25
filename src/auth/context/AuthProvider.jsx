import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from "../../firebase/providers";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: "checking",
  formSubmited: false,
  alert: false,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const location = useLocation();

  const login = (payload) => {
    dispatch({ type: types.login, payload: payload });
  };

  const logout = async (payload) => {
    dispatch({ type: types.logout, payload: payload });
  };

  const checkingAuthentication = async (status) => {
    dispatch({ type: types.checkingCredentials, payload: status });
  };

  const startGoogleSignIn = async (status) => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await signInWithGoogle();

    if (!result.ok) return logout(result);

    login(result);
  };

  const startCreatingUserWithEmail = async (
    status,
    { email, password, username }
  ) => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await registerUserWithEmail(email, password, username);

    if (!result.ok) return logout(result);

    login(result);
  };

  const startLoginWithEmailPassword = async (status, email, password) => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await loginWithEmailPassword(email, password);
    console.log(result);
    if (!result.ok) return logout(result);

    login(result);
  };

  const startLogOutWithButton = async () => {
    const result = await logoutFirebase();

    logout(result);
  };

  const setFormSubmited = (bl) => {
    dispatch({ type: types.setFormSubmited, payload: bl });
  };

  const setAlert = (bl) => {
    dispatch({ type: types.setAlert, payload: bl });
  };

  useEffect(() => {
    setFormSubmited(false);
    setAlert(false);
  }, [location]);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        setFormSubmited,
        setAlert,
        checkingAuthentication,
        startGoogleSignIn,
        login,
        logout,
        startCreatingUserWithEmail,
        startLoginWithEmailPassword,
        startLogOutWithButton,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
