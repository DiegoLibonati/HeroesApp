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
import { ActionPayloadAuth, AuthState } from "../../entities/entities";

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    logged: "checking",
    formSubmited: false,
    alert: false,
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
    errorMessage: "",
  });

  const {
    logged,
    formSubmited,
    alert,
    uid,
    email,
    displayName,
    photoURL,
    errorMessage,
  } = authState as AuthState;

  const location = useLocation();

  const login = (payload: ActionPayloadAuth["payload"]): void => {
    dispatch({ type: types.login, payload: payload });
  };

  const logout = (): void => {
    dispatch({ type: types.logout });
  };

  const checkingAuthentication = (status: string): void => {
    dispatch({ type: types.checkingCredentials, payload: status });
  };

  const startGoogleSignIn = async (status: string): Promise<void> => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await signInWithGoogle();

    if (!result.ok) return logout();

    login(result);
  };

  const startCreatingUserWithEmail = async (
    status: string,
    {
      email,
      password,
      username,
    }: { email: string; password: string; username: string }
  ): Promise<void> => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await registerUserWithEmail(email, password, username);

    if (!result.ok) return logout();

    login(result);
  };

  const startLoginWithEmailPassword = async (
    status: string,
    email: string,
    password: string
  ): Promise<void> => {
    dispatch({ type: types.checkingCredentials, payload: status });

    const result = await loginWithEmailPassword(email, password);

    if (!result.ok) return logout();

    login(result);
  };

  const startLogOutWithButton = async (): Promise<void> => {
    await logoutFirebase();
    logout();
  };

  const setFormSubmited = (bl: boolean): void => {
    dispatch({ type: types.setFormSubmited, payload: bl });
  };

  const setAlert = (bl: boolean): void => {
    dispatch({ type: types.setAlert, payload: bl });
  };

  useEffect(() => {
    setFormSubmited(false);
    setAlert(false);
  }, [location]);

  return (
    <AuthContext.Provider
      value={{
        logged,
        formSubmited,
        alert,
        uid,
        email,
        displayName,
        photoURL,
        errorMessage,
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
