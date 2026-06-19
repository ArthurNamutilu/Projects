function truncateString(str, num){
  if(str.length > num){
    return str.slice(0, num) + ".".repeat(3)
  }else if(str.length <= num){
    return str
  }
}
console.log(truncateString("check", 8))
console.log(truncateString("Arthur", 3))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))