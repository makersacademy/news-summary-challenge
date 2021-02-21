var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "client");
var server = httpServer.createServer({
    root: pathToHtmlAndJsFiles
});
server.listen(3000, () => console.log('listening at 3000'));

