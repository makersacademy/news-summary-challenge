const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const util = require('util');
const formidable = require('formidable');
const qs = require('querystring');
const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);// status code HTTP 200/OK
})
console.log("connection")


server.listen(3000, function() {
    console.log("Listening on port 3000");
})