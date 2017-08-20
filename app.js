var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname);
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(8080, function() {
  console.log("Server is running on 8080");
});
