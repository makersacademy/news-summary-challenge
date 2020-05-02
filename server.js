const http = require("http");
const url = require("url");

const server = http.createServer(function(req, res) {

})

server.listen(1234, function() {
  console.log("Hello world");
  console.log("Listening on port 1234");
})