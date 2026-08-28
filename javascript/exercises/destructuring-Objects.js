const Fridge = {
    brand: "Heir",
    color: "White",
    year: 2025,
    isWorking: true
}

const {brand: model, year} = Fridge;

console.log(`Greetings, please find fridge ${model} manufactured in ${year}`);