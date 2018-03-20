const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
	
	const urlObject = url.parse(req.url, true)
	let result = null

	if (urlObject.pathname == '/api/parsetime') {
		result = _getTimeObj(_getTimeStamp(urlObject.query.iso))
	} else if (urlObject.pathname == '/api/unixtime') {
		result = _getUnixTime(urlObject.query.iso)
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})

function _getTimeStamp(startTime) {
	return Date.parse(startTime)
}

function _getTimeObj(startTime) {
	const date = new Date(startTime)
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function _getUnixTime(startTime) {
	return {
		unixtime: _getTimeStamp(startTime)
	}
}

server.listen(process.argv[2])

