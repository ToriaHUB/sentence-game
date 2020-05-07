import { SetWhatAction, SetWhenAction, SetWhereAction, SetWhoAction } from "./actions"

const initialState: ReduxState = {
  who: "",
  what: "",
  when: "",
  where: "",
}

export type ReduxState = {
  who: string
  what: string
  when: string
  where: string
}

export const reducer = (
  state = initialState,
  action: SetWhoAction | SetWhatAction | SetWhenAction | SetWhereAction
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
    default:
      return state
  }
}
