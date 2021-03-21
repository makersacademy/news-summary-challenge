const httpServer = require('http-server');
const path = require('path')

const pathToFiles = path.join(__dirname, 'public')
const server = httpServer.createServer({ root: pathToFiles });
server.listen(8888);
