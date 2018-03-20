const net = require('net')
const port = process.argv[2]

const server = net.createServer(function (socket) {
	socket.end(_now() + '\n')
})

function _now() {
	const date = new Date()
	//AAAA-MM-DD hh:mm
	return date.getFullYear() + '-' + 
		((date.getMonth() + 1).toString().length == 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + 
		(date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate()) + ' ' +
		date.getHours() + ':' + 
		date.getMinutes()
}

server.listen(Number(port))
