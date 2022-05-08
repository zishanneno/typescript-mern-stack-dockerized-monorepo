import axios from "axios";
import { IUser } from "shared";
import {
  API_HOSTNAME,
  API_LOGIN,
  API_PORT,
  API_URL_SCHEME,
} from "src/common/constants";
import { Service } from "typedi";

const API_URL = `${API_URL_SCHEME}${API_HOSTNAME}:${API_PORT}`;

@Service()
export default class AuthService {
  public async SignIn(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }> {
    return axios
      .post(`${API_URL}${API_LOGIN}`, {
        email,
        password,
      })
      .then((response) => {
        return response.data;
      });
  }
}
