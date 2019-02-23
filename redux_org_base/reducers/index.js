import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilters'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
