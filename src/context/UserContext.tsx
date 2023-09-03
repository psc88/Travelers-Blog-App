import { createContext } from "react";
import { User } from "../interfaces/User.interface";

interface IUserContextValue {
  userAuthenticated: User
  setUserAuthenticated: React.Dispatch<React.SetStateAction<User>>
  logout: () => void
}

export const UserContext = createContext<IUserContextValue>(
  {} as IUserContextValue
)