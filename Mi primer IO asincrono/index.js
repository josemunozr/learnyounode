const fs = require('fs')

const file = fs.readFile(process.argv[2], function (error, data) {
  if (error) {
    return console.log(error);
  }

  const cantSaltos = data.toString().split('\n')
  console.log(cantSaltos.length - 1);
})
