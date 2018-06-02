function testPass(message){
  jaz.consoleArray.push('%c ' + message + ',' + 'color: #77f441')
  return message
}

function testFailed(message){
  jaz.consoleArray.push('%c ' + message + ',' + 'color: #f44242')
  return message
}
