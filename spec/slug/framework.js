function describe(str, resultHash) {
  var result = resultHash['passed']
  var color = (result == true ? "green" : "red")
  var resultHtml = `
  <div class = 'result' style = 'color:${color};'>
  <h3>${str}</h3>
  <ul>
    <li>Result: ${result}</li>
    <li>Message: ${resultHash['message']}</li>
    <li>Expected: ${resultHash['expected']}</li>
    <li>Got: ${resultHash['got']}</li>
    </ul>
  </div> `

  document.getElementById('results').innerHTML += resultHtml
}

function expect(methodValue){
  this.toEq = function(comparisonValue){
    if(comparisonValue === methodValue){
      return {message: "Passed", 'passed': true, 'expected': comparisonValue, 'got': methodValue}
    } else {
      return {message: `Failed. Expected ${comparisonValue}, got ${methodValue}`, 'passed': false, 'expected': comparisonValue, 'got': methodValue}
    }
  };
  this.contains = function(comparisonValue){
    if(methodValue.includes(comparisonValue)) {
      return {message: "Passed", 'passed': true, 'expected': comparisonValue, 'got': methodValue}
    }
    else {
      return {message: `Failed. Expected ${comparisonValue} to be contained within ${methodValue}`, 'passed': false, 'expected': comparisonValue, 'got': methodValue}
    }
  }
 this.toBeA = function(comparisonValue){
    if(typeof methodValue == typeof comparisonValue ) {
      return {message: "Passed", 'passed': true, 'expected': comparisonValue, 'got': methodValue}
    } else{
      return {message: `Failed. Expected ${comparisonValue} to be the same type as ${methodValue}`, 'passed': false, 'expected': comparisonValue, 'got': methodValue}
    }
  }
  return this
}
