import { ResetStore, SetSentence, SetWhatAction, SetWhenAction, SetWhereAction, SetWhoAction } from "./actions"

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

export const reducer = (
  state = initialState,
  action: SetWhoAction | SetWhatAction | SetWhenAction | SetWhereAction | SetSentence | ResetStore
): ReduxState => {
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
      const sentence = `${state.who} ${state.what} ${state.where} ${state.when}`
      return { ...state, sentence: sentence }
    case "RESET_STORE":
      return { ...initialState }
    default:
      return state
  }
}
