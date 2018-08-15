import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const GET_IMAGES = 'GET_IMAGES';

const initialState = {
  user: {},
  images: []
};

//admin login
export function loginUser(email) {
  return {
    type: LOGIN_USER,
    payload: axios.get('/api/user', { email })
  };
}

export function getImages(images) {
  return {
    type: GET_IMAGES,
    payload: axios.get('/api/getImages')
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

    case `${GET_IMAGES}_FULFILLED`:
      return {
        ...state,
        images: action.payload.data
      };

    default:
      return state;
  }
}
