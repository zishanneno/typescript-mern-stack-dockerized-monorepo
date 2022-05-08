import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth";

export const rootReducer = combineReducers({ auth: AuthReducer });
export type RootReducer = ReturnType<typeof rootReducer>;
