import { createStore } from 'redux'
import todoApp from './reducers'
import {
  addTodo,
  toggleTodo,
  setVisiblityFilter,
  VisibilityFilters
} from './actions'

const store = createStore(todoApp)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisiblityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
