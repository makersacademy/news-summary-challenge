const Newspage = require('./src/newspage.js')
let news = new Newspage();

const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StrongDecoder;

const server = http.createServer(function(req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  path = path.replace(/^\/+|\+$/g, "");
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();

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
  //this function gets called is the user is in newspage view
  //this is a get request
  home: function(data, res) {
    let newsPage = {
      headlinesList: articles
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