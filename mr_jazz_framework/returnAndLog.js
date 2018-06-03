function testPass(message){
  jaz.consoleArray.push('%c PASSED: ' + message + ',' + 'color: #77f441')
  return message
}

function testFailed(message){
  jaz.consoleArray.push('%c FAILED: ' + message + ',' + 'color: #f44242')
  return message
}
