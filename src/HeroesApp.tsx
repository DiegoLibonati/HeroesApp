import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AuthErrorAlert } from "./auth/components/AuthErrorAlert";
import "animate.css";

export const HeroesApp = (): JSX.Element => {
  return (
    <AuthProvider>
      <AppRouter></AppRouter>
      <AuthErrorAlert></AuthErrorAlert>
    </AuthProvider>
  );
};
