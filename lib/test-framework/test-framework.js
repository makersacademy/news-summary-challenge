function it(TestTitle, func) {
  var stringOutput = "<h1>" + testTitle + "</h1></br>";
  try{
    stringOutput += func();
    output(stringOutput);
  }
  catch(err){
    stringOutput += "<i>" + err + "</i><br>" + err.stack;
    output(stringOutput);
  }
}

function expect(expectation) {
  return expectation;
}

function output(outputText){
  document.getElementById("errorMsg").innerHTML += outputText + "<br><br>";
}
