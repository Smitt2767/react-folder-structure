import { SET_USER } from "./actionTypes";

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});
