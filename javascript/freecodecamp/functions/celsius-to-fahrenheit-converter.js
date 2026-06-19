const convertCtoF = (tempInCelsius) => {
  const tempInFahrenheit = tempInCelsius * (9/5) + 32
  return tempInFahrenheit
}

console.log(convertCtoF(-30))