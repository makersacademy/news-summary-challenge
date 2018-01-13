var http = require('http');
var url = 'http://content.guardianapis.com/search?tag=environment/recycling&api-key=test'
var newsApi = '';

http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
    getNewsApi(req, res);
      break;
    default:
      break;
  }
}).listen(8000, () => {
  console.log('Running server on port 8000')
});

function getNewsApi(req, res) {
  if (req.url === '/help') {
    http.get(url, (response) => {
      response.setEncoding("utf8");
      response.on("data", (data) => { newsApi += data });
      response.on('end', () => {
        newsApi = JSON.parse(newsApi);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end()
      });
    });
  }
}