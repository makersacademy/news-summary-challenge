const http = require('http')
const fs = require('fs')
const port = 4000

const server = http.createServer((req,res) => {
  if (req.method === 'GET') {
    // gets path of relevant file for html, js, css and favicon requests
    let filePath = (req.url == "/") ? "./public/index.html" : "./public" + req.url

    // extracts file extension name
    let filetype = filePath.split('.')[2]

    // hash of MIME type for each file extension
    let mimeList = {
      'html': 'text/html',
      'js': 'text/javascript',
      'css': 'text/css',
      "png": "image/png",
      "jpg" : "image/jpeg",
      'json': 'application/json',
      'ico': 'image/x-icon'
    }

    // sets content type for the request based on filetype
    let mimeType = mimeList[filetype]

    // reads file with correct content type
    fs.readFile(filePath, (err, file) => {
      if (err) {
        // returns 404 if no file found
        res.writeHead(404)
        res.end()
      } else {
        res.writeHead(200, {'Content-Type': mimeType})
        res.end(file)
      }
    })
  }
  else {
    // returns 403 for any other type of request
    res.writeHead(403)
    res.end()
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log("There was an error opening the port")
  } else {
    console.log(`Server is listening on port ${port}`)
  }
})
