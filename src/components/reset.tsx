import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators } from "../redux/creators"
import Button from "@material-ui/core/Button"
import { ReduxState } from "../redux/reducer"

export const ResetButton: React.FC = () => {
  const dispatch = useDispatch()

  const sentence = useSelector<ReduxState, string>((state) => state.sentence)
  /**
   * Resets redux store to the initial state
   */
  const handleResetButtonClick = () => {
    dispatch(actionCreators.resetStore())
  }

  return (
    <Button
      disabled={!Boolean(sentence)}
      href={""}
      color={"secondary"}
      variant={"contained"}
      onClick={handleResetButtonClick}
    >
      Reset
    </Button>
  )
}
