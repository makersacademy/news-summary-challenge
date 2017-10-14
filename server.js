var http = require('http')
var fs=require('fs');
var server = http.createServer(engine).listen(1337);

server.listen(1337, function() {
  console.log('Server received request')

})


function engine(request,response){

  if (request.url === '/public/style.css') {
    response.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFile('./public/style.css', {encoding: 'utf8'});
    response.writeHead(fileContents);
  }

  fs.readFile("./" + request.url,function(error,data){
  console.log(request.method)
         if(error){
             response.writeHead(404,{"Content-type":"text/plain"});
             response.end("Sorry the page was not found");
         }else{
             response.writeHead(202,{"Content-type":"text/html"});
             response.end(data);

         }
     });
  console.log(request.url)
}



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "stubbz",
  database: "PingPongDB_dev"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO note (id, body) VALUES ('342', 'Hi Mencheng')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

console.log("Poopy pants")
