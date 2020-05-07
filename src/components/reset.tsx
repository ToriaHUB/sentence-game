import React from "react"
import { useDispatch } from "react-redux"
import { actionCreators } from "../redux/creators"
import Button from "@material-ui/core/Button"

export const ResetButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Button
      href={""}
      color={"secondary"}
      variant={"contained"}
      onClick={() => {
        dispatch(actionCreators.resetStore())
      }}
    >
      Reset
    </Button>
  )
}
