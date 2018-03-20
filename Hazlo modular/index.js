const readList = require('./readList')
const path = require('path')

const dir = process.argv[2]
const ext = process.argv[3]

readList(dir, ext, function (err, list) {
	if(err) return console.log(err);
	list.forEach(item => {
		console.log(item);
	});
})
