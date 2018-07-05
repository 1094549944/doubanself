export function subStr (value) {
  let newVal = value.replace(/<.*?>/g, '')
  return newVal.slice(0, 80)
}
