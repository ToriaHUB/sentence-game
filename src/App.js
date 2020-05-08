import React from "react"
import { InputList } from "./components/input-list"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Sentence } from "./components/sentence"
import { SentenceButton } from "./components/sentence-button"
import { ResetButton } from "./components/reset"
import Grid from "@material-ui/core/Grid"

function App() {
  return (
    <Provider store={store}>
      <Grid
        container={true}
        style={{ paddingTop: "3em" }}
        spacing={10}
        component={"div"}
        direction={"column"}
        alignItems={"center"}
      >
        <Grid component={"div"} item={true} xs={12}>
          <InputList />
        </Grid>

        <Grid container={true} spacing={2} component={"div"} justify={"center"}>
          <Grid component={"div"} item={true}>
            <SentenceButton />
          </Grid>
          <Grid component={"div"} item={true}>
            <ResetButton />
          </Grid>
        </Grid>

        <Grid component={"div"} item={true}>
          <Sentence />
        </Grid>
      </Grid>
    </Provider>
  )
}

export default App
