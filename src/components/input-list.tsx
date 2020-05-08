import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField/TextField"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators } from "../redux/creators"
import { ReduxState } from "../redux/reducer"

export const InputList: React.FC = () => {
  const dispatch = useDispatch()

  const who = useSelector<ReduxState, string>((state) => state.who)

  const what = useSelector<ReduxState, string>((state) => state.what)

  const when = useSelector<ReduxState, string>((state) => state.when)

  const where = useSelector<ReduxState, string>((state) => state.where)

  /**
   * Input change handlers
   */
  const handleWhoChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actionCreators.setWho(event.target.value))

  const handleWhatChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actionCreators.setWhat(event.target.value))

  const handleWhenChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actionCreators.setWhen(event.target.value))

  const handleWhereChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actionCreators.setWhere(event.target.value))

  return (
    <Grid container={true} spacing={2} direction={"column"} alignItems={"center"} component={"div"}>
      <Grid item={true} component={"div"}>
        <TextField label="Who?" value={who} onChange={handleWhoChange} />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="What?" value={what} onChange={handleWhatChange} />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="When?" value={when} onChange={handleWhenChange} />
      </Grid>
      <Grid component={"div"} item={true}>
        <TextField label="Where?" value={where} onChange={handleWhereChange} />
      </Grid>
    </Grid>
  )
}
