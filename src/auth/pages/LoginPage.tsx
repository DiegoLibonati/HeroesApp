import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { FaGoogle } from "react-icons/fa";
import { useMemo } from "react";
import { FormDataAuth } from "../../entities/entities";
import "./login.css";

const formData: FormDataAuth = {
  email: "",
  password: "",
};

export const LoginPage = (): JSX.Element => {
  const authContext = useContext(AuthContext);

  const isChecking = useMemo(() => {
    if (authContext?.logged === "checking") {
      return true;
    }

    return false;
  }, [authContext?.logged]);

  const { formState, onInputChange, onResetForm } =
    useForm<FormDataAuth>(formData);

  const onLogin = (e) => {
    e.preventDefault();
    authContext?.setFormSubmited(true);
    if (formState.email === "" || formState.password === "") {
      onResetForm();
      authContext?.checkingAuthentication("not-authenticated");
      return authContext?.setAlert(true);
    }
    authContext?.startLoginWithEmailPassword(
      "checking",
      formData.email,
      formData.password
    );
  };

  const onGoogleSignIn = (): void => {
    authContext?.startGoogleSignIn("checking");
  };

  return (
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
          placeholder={"Enter your email..."}
          name="email"
          value={formData.email}
          onChange={onInputChange}
        ></input>
        <input
          type="password"
          placeholder={"Enter your password..."}
          name="password"
          value={formData.password}
          onChange={onInputChange}
        ></input>
        <button type="submit" className="login-button" disabled={isChecking}>
          Login
        </button>
        {!isChecking && (
          <Link to="/register" className="login-button">
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
  );
};
