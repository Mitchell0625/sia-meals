import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const GET_IMAGES = 'GET_IMAGES';
const GET_SLIDER_IMAGES = 'GET_SLIDER_IMAGES';

const initialState = {
  user: {},
  allImages: [],
  sliderImages: []
};

//admin login
export function loginUser(email) {
  return {
    type: LOGIN_USER,
    payload: axios.get('/api/user', { email })
  };
}

export function getImages() {
  return {
    type: GET_IMAGES,
    payload: axios.get('/api/getImages')
  };
}

export function getSliderImages() {
  return {
    type: GET_SLIDER_IMAGES,
    payload: axios.get('/api/getSliderImages')
  };
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };

    case `${GET_IMAGES}_FULFILLED`:
      return {
        ...state,
        allImages: action.payload.data
      };
    case `${GET_SLIDER_IMAGES}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        sliderImages: action.payload.data
      };

    default:
      return state;
  }
}
