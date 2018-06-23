const ADD_USER = "ADD_USER";

const initialState = {
  user: {}
};

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
