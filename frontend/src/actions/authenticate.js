import axios from "axios";
import { setAlert } from "./alert";
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  FAIL_SIGNUP,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "./Actions";

export const singInAuthentication = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:8000/api/token/",
      body,
      config
    );

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Successfully Signed in!", "success"));
  } catch (err) {
    dispatch({
      type: SIGNIN_FAIL,
    });

    dispatch(setAlert(" Error Signing in! ", "error"));
  }
};

export const signUp =
  ({ name, email, password, password2 }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password, password2 });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/accounts/signup",
        body,
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      dispatch(singInAuthentication(email, password));
    } catch (err) {
      dispatch({
        type: FAIL_SIGNUP,
      });

      dispatch(setAlert("Error Authenticating", "error"));
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setAlert("logout successful.", "success"));
  dispatch({ type: LOGOUT });
};
