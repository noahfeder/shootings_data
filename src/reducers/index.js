import { combineReducers } from 'redux';

import {
  REQUEST_RECORDS,
  RECEIVE_RECORDS,
  UPDATE_QUERY,
  PAGE_UP,
  PAGE_DOWN,
  PAGE_SIZE,
  SET_ACTIVE,
  REQUEST_VIDEOS,
  RECEIVE_VIDEOS,
  REQUEST_REPS,
  RECEIVE_REPS,
} from '../types';

let initialActive = {  age: 36,  agency: "Houston Police Department",  armed: "Unarmed",  cause: "Vehicle",  charges: "Charged",  city: "Richmond",  county: "Fort Bend",  date: "2016-08-12",  description: null,  disposition: "Charged with manslaughter",  gender: "Male",  id: 2,  image_url: "http://www.khou.com/img/resize/content.khou.com/photo/2016/08/16/brian-manring_1471385260215_5377214_ver1.0.jpg?preset=video-still",  link_url: "http://www.chron.com/local/article/Deputies-Houston-police-officer-charged-in-fatal-9170856.php#photo-10746995",  mental_illness: "Drug or alcohol use",  name: "Brian Manring",  race: "White",  state: "TX",  street: "Westmoor Dr & Beechnut Rd",  zip: "77407",};
//TODO REMOVE INITIALACTIVE AND INITIAL STATE IN PEOPLE REDUCER
function people(state = {
  fetching: false,
  query: '',
  data: [],
  active: initialActive,
}, action) {
  switch (action.type) {
    case REQUEST_RECORDS:
      return {
        ...state,
        query: action.query,
        fetching: true,
      };
    case RECEIVE_RECORDS:
      return {
        ...state,
        query: action.query,
        fetching: false,
        data: action.data,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: action.data,
      }
    default:
      return state;
  }
}

function query(state = {}, action) {
  switch(action.type) {
    case UPDATE_QUERY:
      let newState = {};
      newState[action.key] = action.value;
      return { ...state, ...newState };
    default:
      return state;
  }
}

function page(state = {
  min: 0,
  max: 10,
  size: 10
}, action) {
  switch (action.type) {
    case PAGE_UP: {
      let newState = {
        min: state.min += state.size,
        max: state.max += state.size,
      };
      return { ...state, ...newState };
    }
    case PAGE_DOWN: {
      let newState = {
        min: state.min -= state.size,
        max: state.max -= state.size,
      };
      return { ...state, ...newState };
    }
    case PAGE_SIZE:  {
      let newState = {
        max: state.min + action.size,
        size: action.size,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
}

function videos(state = {
  fetching: false,
  videoIds: [],
  name: '',
}, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return { ...state, fetching: true, name: action.name};
    case RECEIVE_VIDEOS:
      return { ...state, fetching: false, videoIds: action.data.videoIds };
    default:
      return state;
  }
}

function reps(state = {
  fetching: false,
  data: {},
  zip: '',
}, action) {
  switch (action.type) {
    case REQUEST_REPS:
      return { ...state, fetching: true, zip: action.zip};
    case RECEIVE_REPS:
      return { ...state, fetching: false, data: JSON.parse(action.data) };
    default:
      return state;
  }
}

const RootReducer = combineReducers({
  people,
  query,
  page,
  videos,
  reps
});

export default RootReducer;
