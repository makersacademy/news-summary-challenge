"use strict";

var fs = require("fs");
var path = require("path");

var spike = require("./lib/spike");
var assert = require("./lib/assert");

function isTestFile(fileName) {
    return fileName.match(/test\.js$/);
};

function runTestFile(filePath) {
    require(filePath);
};

function runAllTestsInDirectory(directoryPath) {
    fs.readdirSync(directoryPath)
        .filter(isTestFile)
        .map(function(fileName) {
            return path.join(directoryPath, fileName);
        })
        .forEach(runTestFile);
};

exports.spike = spike;
exports.assert = assert;

runAllTestsInDirectory(__dirname);