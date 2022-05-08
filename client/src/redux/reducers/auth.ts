import { IAction } from "src/common/interfaces/IAction";
import { IAuthState } from "src/common/interfaces/IAuthState";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "src/redux/actions/types";

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  loginFailed: false,
};

export const AuthReducer = (
  state: IAuthState = initialState,
  action: IAction<any>
) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.token,
        loginFailed: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        loginFailed: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        loginFailed: false,
      };
    default:
      return state;
  }
};
