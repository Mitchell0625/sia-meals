import axios from "axios";

const ADD_USER = "ADD_USER";

const initialState = {
  user: {}
};

export function addUser(name, email) {
  return {
    type: ADD_USER,
    payload: axios.post("/api/user", { name, email })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
