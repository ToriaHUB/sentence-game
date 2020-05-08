import { AppActions } from "./actions"
import { constructSentence } from "../helpers/helpers"

const initialState: ReduxState = {
  who: "",
  what: "",
  when: "",
  where: "",
  sentence: "",
}

export type ReduxState = {
  who: string
  what: string
  when: string
  where: string
  sentence: string
}

export const reducer = (state = initialState, action: AppActions): ReduxState => {
  switch (action.type) {
    case "SET_WHO":
      return { ...state, who: action.data }
    case "SET_WHAT":
      return { ...state, what: action.data }
    case "SET_WHEN":
      return { ...state, when: action.data }
    case "SET_WHERE":
      return { ...state, where: action.data }
    case "SET_SENTENCE":
      const sentence = constructSentence({ who: state.who, what: state.what, when: state.when, where: state.where })
      return { ...state, sentence: sentence }
    case "RESET_STORE":
      return { ...initialState }

    default:
      return state
  }
}
