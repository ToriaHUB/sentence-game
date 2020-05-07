import React from "react"
import { useDispatch } from "react-redux"

import { actionCreators } from "../redux/creators"
import Button from "@material-ui/core/Button"

export const SentenceButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Button
      href={""}
      color={"primary"}
      variant={"contained"}
      onClick={() => {
        dispatch(actionCreators.setSentence())
      }}
    >
      Get sentence
    </Button>
  )
}
