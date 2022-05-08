import { IUser } from "shared";

export interface IAuthState {
  isLoggedIn: boolean;
  loginFailed: boolean;
  user: IUser | null;
  token: string | null;
}
