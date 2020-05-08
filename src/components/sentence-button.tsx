import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators } from "../redux/creators"
import Button from "@material-ui/core/Button"
import { ReduxState } from "../redux/reducer"

export const SentenceButton: React.FC = () => {
  const dispatch = useDispatch()

  const who = useSelector<ReduxState, string>((state) => state.who)

  const what = useSelector<ReduxState, string>((state) => state.what)

  const when = useSelector<ReduxState, string>((state) => state.when)

  const where = useSelector<ReduxState, string>((state) => state.where)

  /**
   * Sets redux store field "sentence" from current input values
   */
  const handleSentenceButtonClick = () => {
    dispatch(actionCreators.setSentence())
  }

  return (
    <Button
      disabled={who === "" || what === "" || when === "" || where === ""}
      href={""}
      color={"primary"}
      variant={"contained"}
      onClick={handleSentenceButtonClick}
    >
      Get sentence
    </Button>
  )
}
