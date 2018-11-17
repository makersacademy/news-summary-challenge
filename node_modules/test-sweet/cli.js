#!/usr/bin/env node

CLI = function() {

const shell = require("shelljs")
const fs = require('fs')
const chalk = require('chalk')
const testFolder = "./spec/"

let clean = function() {
if (fs.existsSync('sweets.txt')) {
  fs.unlinkSync('sweets.txt')
}
if (fs.existsSync('wrappers.txt')) {
  fs.unlinkSync('wrappers.txt')
}
}

var runTests = function() { fs.readdirSync(testFolder).forEach(fileName => {
    if (fileName.endsWith("pec.js") || fileName.endsWith("est.js")) {
      shell.exec("node " + testFolder + fileName + " --color=true")
    }
  })
}

var logResults = function() {
  var sweetieBar = fs.readFileSync('sweets.txt', 'utf8')
  var wrapper = fs.readFileSync('wrappers.txt', 'utf8')
  sweetieBarArray = sweetieBar.split(' ')
  wrapperArray = wrapper.split('🍠')
  var passed = 0
  var failed = 0
  for(i = 0; i < sweetieBarArray.length; i++) {
    if(sweetieBarArray[i] === '🍬'){
      passed++;
    } else if (sweetieBarArray[i] === '🌚'){
      failed++;
      var fail = wrapperArray[i]
      console.log(chalk.red('Test failed: ' + fail))
      wrapperArray.splice(i, 1)
    }
  }


  console.log('These tests are sweet:')
  wrapperArray.forEach(test =>
    console.log(chalk.green(test))
  )
  console.log(sweetieBar)
  console.log(chalk.green(passed + " passed."))
  console.log(chalk.red(failed + " failed."))

}

try {
  runTests()
  logResults()
  clean()
} catch(error) {
  if (error.code === 'ENOENT') {
    console.log(chalk.red("🌚 No test files found"))
  }

}
}

new CLI()
