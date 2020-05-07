export type SetWhoAction = {
  type: "SET_WHO"
  data: string
}

export type SetWhatAction = {
  type: "SET_WHAT"
  data: string
}

export type SetWhenAction = {
  type: "SET_WHEN"
  data: string
}

export type SetWhereAction = {
  type: "SET_WHERE"
  data: string
}

export type SetSentence = {
  type: "SET_SENTENCE"
}

export type ResetStore = {
  type: "RESET_STORE"
}
