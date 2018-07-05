import axios from "axios";

const ADD_USER = "ADD_USER";
const LOGIN_USER = "LOGIN_USER";
const GET_MEALS = "GET_MEALS";

const initialState = {
  user: {},
  meals: []
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

export function getMeals() {
  return {
    type: GET_MEALS,
    payload: axios.get("/api/meals")
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
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };

    case `${GET_MEALS}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        meals: action.payload.data
      };
    default:
      return state;
  }
}
