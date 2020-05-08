import { createStore } from "redux"
import { reducer } from "./reducer"

/**
 * Redux store
 */
export const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
