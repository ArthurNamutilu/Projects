// // let fruits = ["Banana", "Lemon", "Oranges", "Mangos"]
// // let arrLength = fruits.length
// // // console.log(arrLength)
// // console.log(Math.floor(Math.random() * fruits.length))


// // function removeLastLunch(arr){
// //   if(arr.length !== 0){
// //     const lastItem = arr[arr.length -1]
// //     console.log(lastItem)
// //     arr.pop()
// //   console.log(`${lastItem} removed from the end of the lunch menu.`)
// //   }else{
// //     console.log("No lunches to remove.")
// //   }
// //     return arr
// // }

// //console.log(removeLastLunch(["Stew", "Soup", "Toast"]))

// function removeFirstLunch  (arr){
//   if(arr.length !== 0){
//     const firstItem = arr[0]
//     console.log(firstItem)
//     arr.shift()
//   console.log(`${firstItem} removed from the start of the lunch menu.`)
//   }else{
//     console.log("No lunches to remove.")
//   }
//     return arr
// }

// console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))

function getRandomLunch(arr){
  if(arr.length !== 0){
    const randomItem = Math.floor(Math.random() * arr.length)
    console.log(`Randomly selected lunch: ${arr[randomItem]}`)
  }else{
    console.log("No lunches available.")
  }
}

console.log(getRandomLunch(["Sushi", "Pizza", "Burger"]))