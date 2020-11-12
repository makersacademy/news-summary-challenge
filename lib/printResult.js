(function (exports) {
  function printResult(result, value, expression) {
    if (result) {
      console.log('Pass!')
    } else {
      console.error('Fail')
      console.error(`Expected : ${value}`)
      console.error(`Got      : ${expression}`)
    }
  }
  exports.printResult = printResult
})(this)