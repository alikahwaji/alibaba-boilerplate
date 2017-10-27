// console.log('utils.js is running')

// export const square = (x) => {
//   return x * x
// }

// export const add = (a, b) => a + b

// export {square, add}
// exports - default export - named export

export const isAdult = (x) => {
  if (x >= 18) {
    return true
  } else {
    return false
  }
}

export const canDrink = (x) => {
  if (x >= 21) {
    return true
  } else {
    return false
  }
}
