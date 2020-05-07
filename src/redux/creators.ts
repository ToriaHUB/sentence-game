import { ResetStore, SetSentence, SetWhatAction, SetWhenAction, SetWhereAction, SetWhoAction } from "./actions"

const setWho = (data: string): SetWhoAction => {
  return {
    type: "SET_WHO",
    data,
  }
}

const setWhat = (data: string): SetWhatAction => {
  return {
    type: "SET_WHAT",
    data,
  }
}

const setWhen = (data: string): SetWhenAction => {
  return {
    type: "SET_WHEN",
    data,
  }
}

const setWhere = (data: string): SetWhereAction => {
  return {
    type: "SET_WHERE",
    data,
  }
}

const setSentence = (): SetSentence => {
  return {
    type: "SET_SENTENCE",
  }
}

const resetStore = (): ResetStore => {
  return {
    type: "RESET_STORE",
  }
}

export const actionCreators = {
  setWho,
  setWhat,
  setWhen,
  setWhere,
  setSentence,
  resetStore,
}
