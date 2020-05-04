var httpServer = require("http-server");
var path = require("path");

const http = require("http");
const https = require("https");
//const url = require("url");
const fs = require("fs")
const StringDecoder = require("string_decoder").StrongDecoder;

var pathToHtmlAndJsFiles = path.join(__dirname, "./");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e9aeaed39a4b618ef9b6fd8b0bc4930d#"
  https.get(url, res => {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    })
    res.on("end", () => {
      let url = JSON.parse(data);
       console.log(url);
       res.write("<p>Today is<p>");
       res.send();
    })
    .on("error", err => {
      console.log("error: " + err.message);
    })
})


server.listen(3000);

/*
const server = http.createServer(function(req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  path = path.replace(/^\/+|\+$/g, "");
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();

  if (path == "") {
    path = "index.html";
  }

  console.log(`Requested path ${path}`);

  let file = __dirname + "/public" + path;
  
  fs.readFile(file, function(err, content) {
    if(err) {
      console.log(`File note found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      console.log(`Returning ${path}`);
      res.setHeader("X-Content_TYpe-Options", "nosniff");

    }
  })


  req.on("data", function(){
    console.log("got some news");

  })

  
  req.on("end", function(){
    let route = 
      typeof routes[path] != "undefined" ? routes[path] : routes["notFound"];
    let data = {
      path: path, 
      queryString: qs,
      headers: headers,
      method: method
    };
    route(data, res);
  })
 
}) 

server.listen(1234, function() {
  console.log("Hello world");
  console.log("Listening on port 1234");
})



const routes = {
  //this function gets called is the user is in headlines view
  //this is a get request
  home: function(data, res) {
    let newsPage = {
      headlinesView: articles
    }
    let newsPageStr = JSON.stringify(newsPage);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(newsPageStr);
    res.end("\n");

  },
  //this function gets called if the user clicks through an article
  article: function(data, res) {

  }
}
   */