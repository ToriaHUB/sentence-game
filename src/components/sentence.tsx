import React from "react"
import { useSelector } from "react-redux"
import { ReduxState } from "../redux/reducer"

export const Sentence: React.FC = () => {
  const who = useSelector<ReduxState, string>((state) => {
    return state.sentence
  })

  return <div>{who}</div>
}
