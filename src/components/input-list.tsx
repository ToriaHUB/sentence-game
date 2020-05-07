import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField/TextField"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators } from "../redux/creators"
import { ReduxState } from "../redux/reducer"

export const InputList: React.FC = () => {
  const dispatch = useDispatch()

  const who = useSelector<ReduxState, string>((state) => {
    return state.who
  })

  const what = useSelector<ReduxState, string>((state) => {
    return state.what
  })

  const when = useSelector<ReduxState, string>((state) => {
    return state.when
  })

  const where = useSelector<ReduxState, string>((state) => {
    return state.where
  })

  return (
    <Grid container={true} spacing={2} direction={"column"} alignItems={"center"} component={"div"}>
      <Grid item={true} component={"div"}>
        <TextField
          label="Who?"
          fullWidth={true}
          value={who}
          onChange={(event) => {
            dispatch(actionCreators.setWho(event.target.value))
          }}
        />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField
          label="What?"
          value={what}
          onChange={(event) => {
            dispatch(actionCreators.setWhat(event.target.value))
          }}
        />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField
          label="When?"
          value={when}
          onChange={(event) => {
            dispatch(actionCreators.setWhen(event.target.value))
          }}
        />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField
          label="Where?"
          value={where}
          onChange={(event) => {
            dispatch(actionCreators.setWhere(event.target.value))
          }}
        />
      </Grid>
    </Grid>
  )
}
