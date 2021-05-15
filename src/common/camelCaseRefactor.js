export const CamelCaseRefactor = word => {
  let refactWord = word.replace(/([A-Z][a-z]+)/g, ' $1 ').trim().toLowerCase();

  return refactWord[0].toUpperCase() + refactWord.slice(1)
}