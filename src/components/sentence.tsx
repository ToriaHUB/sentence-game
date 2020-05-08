import React from "react"
import { useSelector } from "react-redux"
import { ReduxState } from "../redux/reducer"
import { Typography } from "@material-ui/core"

export const Sentence: React.FC = () => {
  const sentence = useSelector<ReduxState, string>((state) => {
    return state.sentence
  })

  return (
    <Typography variant="h4" component="h2" gutterBottom>
      {sentence}
    </Typography>
  )
}
