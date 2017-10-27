// console.log('utils.js is running')
// export const square = (x) => {
//   return x * x
// }

// export const add = (a, b) => a + b

// const sub = (a, b) => {
//   return a - b 
// }

// export default (a, b) => a - b

// export {square, add, sub as default}
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
const isSenior = (x) => {
  if (x >= 64) {
    return true
  } else {
    return false
  }
}

export default isSenior
