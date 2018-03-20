
const params = process.argv.slice(2)

const sum = params.reduce((actual, acumulador, siguiente) => {
 return parseInt(actual) + parseInt(acumulador)
},0)

console.log(sum);
