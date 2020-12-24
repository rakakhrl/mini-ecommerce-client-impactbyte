import api from "../../config/api";
import { CHANGE_LOGIN_STATUS, UPDATE_USER_DATA } from "./actionType";

const register = (data) => async (dispatch) => {
  try {
    console.log(data);
    const response = await api.post("/register", data);

    localStorage.setItem("accesstoken", response.data.token);
    localStorage.setItem("isLogin", true);

    dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
    dispatch({ type: UPDATE_USER_DATA, payload: {} });
  } catch (error) {
    console.log(`Register error. ${error}`);
  }
};

const login = (credential) => async (dispatch) => {
  try {
    const response = await api.post("/login", credential);

    localStorage.setItem("accesstoken", response.data.token);
    localStorage.setItem("isLogin", true);

    dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
    dispatch({ type: UPDATE_USER_DATA, payload: {} });
  } catch (err) {
    console.log(`Login error. ${err}.`);
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem("accesstoken");
  localStorage.setItem("isLogin", false);

  dispatch({ type: CHANGE_LOGIN_STATUS, payload: false });
  dispatch({ type: UPDATE_USER_DATA, payload: {} });
};

export { register, login, logout };
