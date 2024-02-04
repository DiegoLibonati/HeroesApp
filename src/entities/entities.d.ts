import React from "react";

// TYPES

export type AuthContextT = {
  logged: string;
  formSubmited: boolean;
  alert: boolean;
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  errorMessage: string;
  setFormSubmited: (bl: boolean) => void;
  setAlert: (bl: boolean) => void;
  checkingAuthentication: (status: string) => void;
  startGoogleSignIn: (status: string) => Promise<void>;
  login: (payload: ActionPayloadAuth["payload"]) => void;
  logout: () => void;
  startCreatingUserWithEmail: (
    status: string,
    {
      email,
      password,
      username,
    }: { email: string; password: string; username: string }
  ) => Promise<void>;
  startLoginWithEmailPassword: (
    status: string,
    email: string,
    password: string
  ) => Promise<void>;
  startLogOutWithButton: () => Promise<void>;
};

export type AuthState = {
  logged: string;
  formSubmited: boolean;
  alert: boolean;
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  errorMessage: string;
};

export type ActionPayloadAuth = {
  type: string;
  payload:
    | AuthState
    | SignInWithGoogle
    | RegisterUserWithEmail
    | LoginWithEmailPassword;
};

export type FormDataAuth = {
  email: string;
  password: string;
  username?: string;
};

export type UseForm<T> = {
  formState: T;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onResetForm: () => void;
};

export type SignInWithGoogle =
  | {
      ok: boolean;
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      uid: string;
    }
  | {
      ok: boolean;
      errorCode: string;
      errorMessage: string;
    };

export type RegisterUserWithEmail =
  | {
      ok: boolean;
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      uid: string;
    }
  | {
      ok: boolean;
      errorCode: string;
      errorMessage: string;
    };

export type LoginWithEmailPassword =
  | {
      ok: boolean;
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
      uid: string;
    }
  | {
      ok: boolean;
      errorCode: string;
      errorMessage: string;
    };

export type UseCounter = {
  counter: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export type UsePagination<T> = {
  currentItems: T[];
  pages: number[];
  renderPageNumbers: (JSX.Element | null)[];
  pageDecrementBtn: JSX.Element;
  pageIncrementBtn: JSX.Element;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};

export type Hero = {
  id: number;
  name: string;
  images: {
    md: string;
    lg: string;
  };
  slug: string;
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
};

export type HeroesState = {
  heroes: Hero[];
  loading: boolean;
  actualPublisher: string;
  nameSearch: string;
  heroId: number;
};

export type HeroesContextT = {
  heroes: Hero[];
  publishers: string[];
  loading: boolean;
  actualPublisher: string;
  searchResults: Hero[];
  searchHeroId: Hero;
  handlePublisher: (publish: string) => void;
  handleSearchPage: (name: string) => void;
  handleHeroId: (id: number) => void;
};

// INTERFACES

export interface HeroCardProps {
  id: number;
  name: string;
  images: {
    lg: string;
  };
  slug: string;
  biography: {
    fullName: string;
    publisher: string;
  };
}

export interface HeroListProps {
  publisher: Hero[];
}

export interface PaginationProps {
  renderPageNumbers: (JSX.Element | null)[];
  pageDecrementBtn: JSX.Element;
  pageIncrementBtn: JSX.Element;
  pages: number[];
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
