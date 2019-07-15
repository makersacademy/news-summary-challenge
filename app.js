"use strict";

//require('./lib/interface.js');

const express = require('express');
const server = express();
const port = 8000;
//var http = require("http");
var path = require("path");
var fs = require("fs");

server.use(express.static('public'));

server.get('/', function(req, res) { 
  res.send('index.html');
  var filename = req.url || "index.html";
    var ext = path.extname(filename);
    var localPath = __dirname;
    var validExtensions = {
        ".html" : "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".txt": "text/plain",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".png": "image/png",
        ".ico": "image/png"
    };
    var isValidExt = validExtensions[ext];

    if (isValidExt) {
        localPath += filename;

        fs.exists(localPath, function(exists) {
            if(exists) {
                console.log("Serving file: " + localPath);
                getFile(localPath, res, validExtensions[ext]);
            } else {
                console.log("File not found: " + localPath);

                if(ext === 'text/html'){
                    getFile(__dirname + '/404.html', res, ext);
                }
            }
        });

    } else {
         console.log("Invalid file extension detected: " + ext)
         getFile(__dirname + '/index.html', res, 'text/html');
    }

});

server.listen(port, () => console.log(`Listening on port ${port}!`));

function getFile(localPath, res, mimeType) {
  fs.readFile(localPath, function(err, contents) {
      if(!err) {
          res.setHeader("Content-Length", contents.length);
          res.setHeader("Content-Type", mimeType);
          res.statusCode = 200;
          res.end(contents);
      } else {
          res.writeHead(500);
          res.end();
      }
  });
}



