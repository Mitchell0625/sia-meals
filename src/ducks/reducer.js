import axios from "axios";

const ADD_USER = "ADD_USER";
const LOGIN_USER = "LOGIN_USER";

const initialState = {
  user: {}
};

export function addUser(name, email) {
  return {
    type: ADD_USER,
    payload: axios.post("/api/user", { name, email })
  };
}
export function loginUser(email) {
  return {
    type: LOGIN_USER,
    payload: axios.get("/api/user", { email })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
