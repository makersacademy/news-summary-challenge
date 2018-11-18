const httpserver = require("http-server")

httpserver.createServer().listen(8080, function() {
  console.log("server up")
})
