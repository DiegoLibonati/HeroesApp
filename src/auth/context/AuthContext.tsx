import { createContext } from "react";
import { AuthContextT } from "../../entities/entities";

export const AuthContext = createContext<AuthContextT | null>(null);
