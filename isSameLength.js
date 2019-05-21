export const isSameLength = arr => {
  try {
    if (arr.length < 2) throw 'not'

    let standard = arr[0].length
    arr.forEach(item => {
      if (typeof item !== 'string') throw 'not'
      if (item.length !== standard) throw 'not'
    })

    return true
  } catch (err) {
    if (err === 'not') return false
    console.log('error occured', err)
  }
}
