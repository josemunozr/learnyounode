const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	fs.createReadStream(file).pipe(response)
})

server.listen(port)