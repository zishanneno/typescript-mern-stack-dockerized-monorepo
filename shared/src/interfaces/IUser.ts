export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
}

export interface IUserInputObject {
  name: string;
  email: string;
  password: string;
}
