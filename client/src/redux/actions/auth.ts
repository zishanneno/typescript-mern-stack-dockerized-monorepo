import { Dispatch } from "redux";
import AuthService from "src/services/auth";
import Container from "typedi";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./types";

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    const authServiceInstance = Container.get(AuthService);
    return authServiceInstance.SignIn(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
          payload: message,
        });

        return Promise.resolve();
      }
    );
  };

export const logout = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
