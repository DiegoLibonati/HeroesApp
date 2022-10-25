import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { FaGoogle } from "react-icons/fa";
import "./login.css";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length > 4,
      "La contraseña debe tener mas de 4 caracteres",
    ],
  ],
};

export const LoginPage = () => {
  const {
    formSubmited,
    setFormSubmited,
    alert,
    setAlert,
    checkingAuthentication,
    startGoogleSignIn,
    logged,
    startLoginWithEmailPassword,
  } = useContext(AuthContext);

  const isChecking = useMemo(() => {
    if (logged === "checking") {
      return true;
    }

    return false;
  }, [logged]);

  const {
    email,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onLogin = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) {
      onResetForm();
      checkingAuthentication("not-authenticated");
      return setAlert(true);
    }
    startLoginWithEmailPassword("checking", email, password);
  };

  const onGoogleSignIn = () => {
    startGoogleSignIn("checking");
  };

  return (
    <>
      <section className="login_container">
        <article className="login_container_img">
          <img
            src="https://c.tenor.com/3Im54mMMkiUAAAAC/the-flash-running.gif"
            alt="gif"
          ></img>
        </article>

        <form onSubmit={onLogin} className="login_container_form">
          <h2>Hello, do you want to be a superhero?</h2>
          <input
            type="text"
            placeholder={
              (alert && formSubmited && emailValid) || "Enter your email..."
            }
            name="email"
            value={email}
            onChange={onInputChange}
            className={(!!emailValid && formSubmited && "error") || ""}
          ></input>
          <input
            type="password"
            placeholder={
              (alert && formSubmited && passwordValid) ||
              "Enter your password..."
            }
            name="password"
            value={password}
            onChange={onInputChange}
            className={(!!passwordValid && formSubmited && "error") || ""}
          ></input>
          <button type="submit" className="login-button" disabled={isChecking}>
            Login
          </button>
          {!isChecking && (
            <Link to="/register" className="login-button" disabled={isChecking}>
              Register
            </Link>
          )}
          <button
            type="submit"
            className="login-button"
            onClick={onGoogleSignIn}
            disabled={isChecking}
          >
            <FaGoogle></FaGoogle>
          </button>
        </form>
      </section>
    </>
  );
};
