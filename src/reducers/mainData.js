import { REQUEST_DATA, RECEIVE_DATA } from '../actions/index'

export default function mainData(state = {}, action) {
  switch(action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        loading: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })
    default:
      return state
  }
}
