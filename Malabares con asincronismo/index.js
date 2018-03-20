const http = require('http')
const concatStream = require('concat-stream')

const result = []
let cont = 0

function httpGet(index) {
	http.get(process.argv[2 + index], function (response) {
		response.setEncoding('utf8')
		response.pipe(concatStream(function (data) {
			result[index] = data
			cont++

			if (cont == 3) {
				print()
			}
		}))
	})
}

function print() {
	result.forEach(function (item) {
		console.log(item);
	})
}

for (let index = 0; index < 3; index++) {
	httpGet(index)
}

