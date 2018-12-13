const fs = require('fs');
const async = require
const exec = require('child_process').exec;
const bucket = require('./bucket.js');
const scriptFolder = '../specs/'

const files = fs.readFile(scriptFolder);

const execSpecs = files.map(function(file){
  return exec.bind(null,`node ${scriptFolder}${file}`);
});

console.log(execSpecs);
