var httpServer = require("http-server");
var server = httpServer.createServer({ root: __dirname });
server.listen(3000);
