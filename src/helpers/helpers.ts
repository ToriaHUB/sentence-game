export const constructSentence = (sentenceParts: {
  who: string
  what: string
  when: string
  where: string
}): string => {
  const { who, what, where, when } = sentenceParts
  if (who === "" && what === "" && when === "" && where === "") {
    return ""
  }
  return `${who} ${what} ${where} ${when}`
}
