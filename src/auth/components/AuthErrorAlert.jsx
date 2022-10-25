import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./autherroralert.css";

export const AuthErrorAlert = () => {
  const { errorMessage } = useContext(AuthContext);
  const [open, setOpen] = useState(!!errorMessage);

  useEffect(() => {
    setOpen(!!errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => clearInterval(timeout);
  }, [errorMessage]);

  if (open) {
    return <div className="alert-login">{errorMessage}</div>;
  }
};
