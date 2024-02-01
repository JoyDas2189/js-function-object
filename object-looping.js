/* var pcComponents = {
    keyboard: "Zifried ZA646",
    mouse: "Raze Deathadder",
    gpu: "Gtx 1030",
    processor: "Intel Core i3 6100"
}
 
var keysNames = Object.keys(pcComponents);
var keyValues = Object.values(pcComponents);

for (var i = 0; i < keysNames.length; i++) {
    var keyName = keysNames[i];
    var keyValue = keyValues[i];
    console.log(`${keyName} : ${keyValue}.`);
}

 */
// For In Loop

/* var pcComponents = {
    keyboard: "Zifried ZA646",
    mouse: "Raze Deathadder",
    gpu: "Gtx 1030",
    processor: "Intel Core i3 6100"
}
for (var properties in pcComponents) {
    var keys = pcComponents[properties]
    var values = pcComponents[properties];
    console.log(`${keys} : ${values}`);
}
 */

// Object TO String.

var student = {
    name: "Abul",
    age: 23,
    gender: "Male"
}
var keys = Object.entries(student);

for(var i = 0; i < keys.length; i++) {
    var key= keys[i];

    console.log(key);
}