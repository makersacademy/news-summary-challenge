var http = require('http')
var fs=require('fs');
var server = http.createServer(engine).listen(1337);

server.listen(1337, function() {
  console.log('Server received request')

})


function engine(request,response){

  if (request.url === '/news') {
    response.writeHead(200, {'Content-type' : 'text/plain'});
    var data = http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body;
    response.end(data);
  }


  console.log(request.url)
}



console.log("Poopy pants")
