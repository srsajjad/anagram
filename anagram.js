import { checkSameLength } from './checkSameLength'

const sfy = x => JSON.stringify(x)

export const checkAnagram = (...args) => {
  try {
    let isSameLength = checkSameLength(args)
    if (!isSameLength) return false

    let dictionaryList = args.map(item => {
      if (typeof item !== 'string') throw 'Function parameter should be String'
      let itemArr = Array.from(item).sort()
      let d = {}
      itemArr.forEach(s => (d[s] === undefined ? (d[s] = 1) : d[s]++))
      return d
    })

    let standard = dictionaryList[0]

    dictionaryList.forEach(d => {
      if (sfy(standard) !== sfy(d)) throw 'not'
    })

    return true
  } catch (err) {
    if (err === 'not') return false
    console.error(err)
  }
}
