function getVowelCount(sentence){
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let foundVowels = []
  for(const vowel of vowels){
    for(const letter of sentence.toLowerCase()){
      if(letter === vowel){
        count++
        foundVowels.push(letter)
      }
    }
  }
  return count
}

console.log(getVowelCount("Arthur"))