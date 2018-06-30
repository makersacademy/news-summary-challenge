var http = require('http');
var cors = require('cors')
var url = 'http://content.guardianapis.com/search?q=breaking%20news&show-fields=shortUrl,thumbnail,trailText&api-key=test'

var server = module.exports = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
    getNewsApi(req, res);
      break;
    default:
      break;
  }
}).listen(8080, () => {
  console.log('Running server on port 8080')
});

function getNewsApi(req, res) {
  if (req.url === '/help') {
    console.log('hi')
    var newsApi = "";
    http.get(url, (response) => {
      response.setEncoding("utf8");
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      response.on("data", (data) => { 
        newsApi += data;
      });
      
      response.on('end', () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(newsApi)
      });
    });
  }
}