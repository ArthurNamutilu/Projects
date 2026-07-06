const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

function golfScore(par, strokesMade) {
  if (strokesMade == 1) {
    return names[0];
  } else if (strokesMade <= par - 2) {
    return names[1];
  } else if (strokesMade == par - 1) {
    return names[2];
  } else if (strokesMade == par) {
    return names[3];
  } else if (strokesMade == par + 1) {
    return names[4];
  } else if (strokesMade == par + 2) {
    return names[5];
  } else if (strokesMade >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(1, 3))