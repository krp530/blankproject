import {DECREMENT, INCREMENT} from './actions'
const initialState = {count: 0}

export default function(state = initialState, action) {
  switch (action.type) {
    case DECREMENT:
      return {...state, count: state.count - 1}
    case INCREMENT:
      return {...state, count: state.count + 1}
    default:
      return state
  }
}
