import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";
import "./register.css";
import { FormDataAuth } from "../../entities/entities";

const formData: FormDataAuth = {
  email: "",
  username: "",
  password: "",
};

export const RegisterPage = (): JSX.Element => {
  const authContext = useContext(AuthContext);

  const { formState, onInputChange, onResetForm } =
    useForm<FormDataAuth>(formData);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    authContext?.setFormSubmited(true);

    if (
      formState.email === "" ||
      formState.password === "" ||
      formState.username === ""
    ) {
      onResetForm();
      return authContext?.setAlert(true);
    }

    authContext?.startCreatingUserWithEmail("checking", {
      email: formData.email,
      password: formData.password,
      username: formData.username!,
    });
  };

  return (
    <>
      <section className="register_container">
        <article className="register_container_img">
          <img
            src="https://i.pinimg.com/originals/96/b0/83/96b083f5f824d2b8b342047b66832276.gif"
            alt="gif"
          ></img>
        </article>

        <form onSubmit={onSubmit} className="register_container_form">
          <h2>You are one step away from being a superhero.</h2>
          <input
            type="text"
            placeholder={"Enter one username..."}
            name="username"
            value={formData.username}
            onChange={onInputChange}
          ></input>

          <input
            type="text"
            placeholder={"Enter one email..."}
            name="email"
            value={formData.email}
            onChange={onInputChange}
          ></input>

          <input
            type="password"
            placeholder={"Enter one password..."}
            name="password"
            value={formData.password}
            onChange={onInputChange}
          ></input>
          <button className="register-button">Register</button>
        </form>
      </section>
    </>
  );
};
