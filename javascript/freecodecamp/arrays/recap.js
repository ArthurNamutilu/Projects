//looping through an array  for.. of/in

const scores = [10, 20, 30, 40, 50];
for(const score in scores){
    console.log(scores[score]);
}

//map()
const singles = [1,2,3,4,5]
const doubles = singles.map(single=>single * 2)
console.log(singles);
console.log(doubles);
