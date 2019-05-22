import { checkSameLength } from './checkSameLength'

const sfy = x => JSON.stringify(x)

const checkAnagram = (...args) => {
  try {
    let isSameLength = checkSameLength(args)
    if (!isSameLength) return false

    let dictionaryList = args.map(item => {
      let itemArr = Array.from(item)
      let d = {}
      itemArr.forEach(s => (d[s] === undefined ? (d[s] = 0) : d[s]++))
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
