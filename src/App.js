import React from "react"
import { InputList } from "./components/input-list"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <InputList />
    </Provider>
  )
}

export default App
