import {ADD_TODO, REMOVE_TODO} from './actions'
import concat from 'lodash/concat'
import reject from 'lodash/reject'

const initialState = {todos: []}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: concat(state.todos, action.payload)}
    case REMOVE_TODO:
      return {...state, todos: reject(state.todos, action.payload)}
    default:
      return state
  }
}
