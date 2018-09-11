import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_IMAGES = 'GET_IMAGES';
const GET_SLIDER_IMAGES = 'GET_SLIDER_IMAGES';
const ADD_IMAGE = 'ADD_IMAGE';
const GET_ABOUT = 'GET_ABOUT';
const UPDATE_ABOUT = 'UPDATE_ABOUT';

const initialState = {
  user: {},
  allImages: [],
  sliderImages: [],
  about: []
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

export function userSignOut(user) {
  return {
    type: LOGOUT_USER,
    payload: user
  };
}

export function getSliderImages() {
  return {
    type: GET_SLIDER_IMAGES,
    payload: axios.get('/api/getSliderImages')
  };
}

export function addImage(image) {
  return {
    type: ADD_IMAGE,
    payload: axios.post('/api/addImage', { image })
  };
}

export function getAbout() {
  return {
    type: GET_ABOUT,
    payload: axios.get('/api/getAbout')
  };
}

export function updateAbout(text, id) {
  return {
    type: UPDATE_ABOUT,
    payload: axios.put(`/api/updateAbout/${id}`)
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
        allImages: action.payload.data
      };
    case `${GET_SLIDER_IMAGES}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        sliderImages: action.payload.data
      };
    case `${ADD_IMAGE}_FULFILLED`:
      return {
        ...state,
        allImages: [...state.allImages, action.payload.data]
      };
    case `${GET_ABOUT}_FULFILLED`:
      return {
        ...state,
        about: action.payload.data
      };
    case `${LOGOUT_USER}_FULFILLED`:
      return {
        ...state,
        user: {}
      };

    default:
      return state;
  }
}
