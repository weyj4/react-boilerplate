import fetch from 'isomorphic-fetch'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export function requestData() {
  return {
    type: REQUEST_DATA
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}

export function fetchData() {
  return function(dispatch) {
    dispatch(requestData())
    return fetch('/api')
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}
