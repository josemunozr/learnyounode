const fs = require('fs')

const file = fs.readFileSync(process.argv[2])
const cantSaltos = file.toString().split('\n')
console.log(cantSaltos.length - 1);
