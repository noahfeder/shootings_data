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
  PEOPLE,
  VIDEOS,
  REPS,
  RESET_PAGE,
} from '../types';



function requestRecords(query = null) {
  return {
    type: REQUEST_RECORDS,
    query: query
  }
}

function receiveRecords(data, query = null) {
  return {
    type: RECEIVE_RECORDS,
    query: query,
    data: data,
    receivedAt: Date.now()
  }
}

export function fetchRecords(query = null) {
  return function(dispatch) {
    dispatch(requestRecords(query));
    let q = query || '';
    return fetch(PEOPLE + q)
      .then( response => response.json() )
      .then( data => dispatch(receiveRecords(data, query)) )
      .catch( error => console.log(error) );
  }
}

export function updateQuery(key, value) {
  return function(dispatch) {
    dispatch({
      type: UPDATE_QUERY,
      key: key,
      value: value
    })
  }
}

export function pageUp() {
  return function(dispatch) {
    dispatch({ type: PAGE_UP });
  };
}

export function pageDown() {
  return function(dispatch) {
    dispatch({ type: PAGE_DOWN });
  };
}

export function pageSize(size) {
  return function(dispatch) {
    dispatch({
      type: PAGE_SIZE,
      size: size,
    });
  };
}

export function resetPage() {
  return function(dispatch) {
    dispatch({
      type: RESET_PAGE,
    });
  };
}

export function setActive(data) {
  return function(dispatch) {
    dispatch({
      type: SET_ACTIVE,
      data: data,
    })
  }
}

function requestVideos(name) {
  return {
    type: REQUEST_VIDEOS,
    name: name,
  };
}

function receiveVideos(data) {
  return {
    type: RECEIVE_VIDEOS,
    data: data,
  };
}

export function fetchVideos(name) {
  return function(dispatch) {
    dispatch(requestVideos(name));
    let q = name.replace(/ /g,'+');
    return fetch(VIDEOS + q)
      .then( response => response.json() )
      .then( data => dispatch(receiveVideos(data)) )
      .catch( error => console.log(error) );
  }
}

function requestReps(zip) {
  return {
    type: REQUEST_REPS,
    zip: zip,
  };
}

function receiveReps(data) {
  return {
    type: RECEIVE_REPS,
    data: data,
  };
}

export function fetchReps(zip) {
  return function(dispatch) {
    dispatch(requestReps(zip));
    return fetch(REPS + zip)
      .then( response => response.json() )
      .then( data => dispatch(receiveReps(data)) )
      .catch( error => console.log(error) );
  }
}
