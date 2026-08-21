// let manifest1 = {
//   containerId: 3820,
//   destination: "Monterey, California, USA",
//   weight: 831,
//   unit: "lb",
//   hazmat: false
// }

function normalizeUnits(manifest) {
  const normalizedManifest = {... manifest} // shallow copy – original manifest stays untouch
  if(normalizedManifest.unit === "lb"){
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
    normalizedManifest.unit = "kg"
  }
  return normalizedManifest;
}

function validateManifest(manifest){
  const validatedManifest = {... manifest}
  
}


const testManifest =  { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }
//{ containerId: 68, destination: "Salinas", weight: 45.45, unit: "kg", hazmat: true } 

console.log(normalizeUnits(testManifest));