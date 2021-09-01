import {
  SIGNUP_SUCCESS,
  FAIL_SIGNUP,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  LOGOUT,
} from "../actions/Actions";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGNIN_SUCCESS:
      localStorage.setItem("token", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.access,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    case FAIL_SIGNUP:
    case SIGNIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
