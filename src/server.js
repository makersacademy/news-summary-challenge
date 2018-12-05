const httpServer = require('http-server')
const server = httpServer.createServer({ root: '.' })
server.listen(process.env.PORT || 3000)
