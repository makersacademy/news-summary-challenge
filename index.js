const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
  if (req.method === 'GET') {
    // handle favicon request
    if (req.url === "/favicon.ico") {
      fs.readFile('./public/favicon.ico', (err, icon) => {
        if (err) {
          console.log('error loading favicon')
        } else {
          res.writeHead(200, {'Content-Type': 'image/x-icon'})
          res.end(icon)
        }
      })
    }
    // handle css request
    else if (req.url == "/mystyle.css") {
      fs.readFile('./public/mystyle.css', (err, css) => {
        if (err) {
          console.log("error reading css")
        } else {
          res.writeHead(200, {'Content-Type': 'text/css'})
          res.end(css)
        }
      })
    }
    // handle html request
    else {
      fs.readFile('./public/index.html', (err, html) => {
        if (err){
          console.log("Error loading html")
        }
        res.writeHead(200, {'Content-Type': "text/html"})
        res.end(html)
      })
    }
  }
  // send 403 error for other requests
  else {
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
