var httpServer = require("http-server");
var path = require("path");
require('dotenv').config();

var pathToHtmlAndJsFiles = path.join(__dirname, "");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
