var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "/");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
console.log("Project runs on localhost:3000")
