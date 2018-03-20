const path = require('path')
const fs = require('fs')

const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, function (error, list) {
  if (error) {
    console.log(error);
  }
  list.forEach(function (item) {
    if (path.extname(item) === '.' + ext) {
      console.log(item);
    }
  })
})

