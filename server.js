const http = require("http");
const url = require("url");

//here we create the server
//we take the url. We take the request object that is sent to us and get
//its url parameter (line 9)
//line 7 creates a constant server and it stores the http server
//with 2 paramters, the request and the rsponse.
//here the reques is the url. Line 9 takes that url that was requested
//and prases it
const server = http.createServer(function(req, res) {
  let parsedURL = url.parse(req.url, true);
  //the parsed url has a path and a query
  let path = parsedURL
  path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parsedURL.query
  let headers = req.headers;
  let method = req.method.toLowerCase();

  //the event listeners
  req.on("data", function(){
    console.log("got some data!")
  })
  req.on("end", function(){
    //request is finished, we send a response
    console.log("send response");
    let route = 
    typeof routes[path] != "undefined" ? routes[path] : routes["notFound"];
    let data = {
      path: path,
      queryString: qs,
      headers: headers,
      method: method,
    };
    route(data, res);
  })

})

server.listen(1234, function() {
  console.log("Hello world");
  console.log("Listening on port 1234");
})

//we create the routes
//the routes are functions that you call based on the url
const routes = {
  //client get request to us
  home: function(data, res) {
    //we display the hadlines
    //so we need to go fetch them from the guardian
  },
  //if user clicks through
  article: function(data, res) {
    //we display the full article
    //this function needs to fetch content from the summary api
  }
  
}