import { AuthState } from "../../entities/entities";
import { types } from "../types/types";

export const authReducer = (state: AuthState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: "authenticated",
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
        email: action.payload.email,
        errorMessage: action.payload.errorMessage,
      };

    case types.logout:
      return {
        ...state,
        logged: "not-authenticated",
        uid: null,
        displayName: null,
        photoURL: null,
        email: null,
        errorMessage: action.payload?.errorMessage,
      };

    case types.setFormSubmited:
      return {
        ...state,
        formSubmited: action.payload,
      };

    case types.setAlert:
      return {
        ...state,
        alert: action.payload,
      };

    case types.checkingCredentials:
      return {
        ...state,
        logged: action.payload,
      };
    default:
      return state;
  }
};
