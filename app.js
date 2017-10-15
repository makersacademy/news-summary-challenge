var httpServer = require("http-server");
var path = require("path");
var XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest()

var pathToHtmlAndJsFiles = path.join(__dirname, "path/from/current/dir/to/html/and/js/files");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000)
