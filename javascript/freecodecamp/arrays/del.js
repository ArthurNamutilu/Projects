function findSmallest(numbers) {
  let smallestNumer = numbers[0]
  for(const number of numbers){
    if(number < smallestNumer){
      smallestNumer = number
    }
  }
  return smallestNumer

}

const nums = [8, 3, 12, 1, 6]
console.log(findSmallest(nums))