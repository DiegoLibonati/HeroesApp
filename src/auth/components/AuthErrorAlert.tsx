import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./autherroralert.css";

export const AuthErrorAlert = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState(!!authContext?.errorMessage);

  useEffect(() => {
    setOpen(!!authContext?.errorMessage);
  }, [authContext?.errorMessage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => clearInterval(timeout);
  }, [authContext?.errorMessage]);

  if (open) {
    return <div className="alert-login">{authContext?.errorMessage}</div>;
  } 
  return <div></div>
};
