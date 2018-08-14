import axios from "axios";

const LOGIN_USER = "LOGIN_USER";

const initialState = {
  user: {}
};

//admin login
export function loginUser(email) {
  return {
    type: LOGIN_USER,
    payload: axios.get("/api/user", { email })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}
