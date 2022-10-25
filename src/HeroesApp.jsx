import React from "react";
import { AppRouter } from "./router/AppRouter";
import "animate.css";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AuthErrorAlert } from "./auth/components/AuthErrorAlert";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter></AppRouter>
        <AuthErrorAlert></AuthErrorAlert>
      </AuthProvider>
    </>
  );
};
