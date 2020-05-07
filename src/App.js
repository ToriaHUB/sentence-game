import React from "react"
import { InputList } from "./components/input-list"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Sentence } from "./components/sentence"
import { SentenceButton } from "./components/sentence-button"
import { ResetButton } from "./components/reset"

function App() {
  return (
    <Provider store={store}>
      <InputList />
      <SentenceButton />
      <ResetButton />
      <Sentence />
    </Provider>
  )
}

export default App
