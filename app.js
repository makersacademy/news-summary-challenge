var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname);
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000, function() {
  console.log("listening on 3000")
});
