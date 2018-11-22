var httpServer = require('http-server')
var server = httpServer.createServer({ root: '.' })
server.listen(process.env.PORT || 3000)
