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

function people(state = {
  fetching: true,
  query: '',
  data: [],
  active: {},
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

function query(state = {
  order: "date",
}, action) {
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
