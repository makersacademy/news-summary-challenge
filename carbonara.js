var testingDisplay = document.getElementById('testingDisplay');

expect = function(input) {
  return {actual: input};
};

Object.prototype.toEqual = function(expected) {
 if (this.actual === expected) {
   var expectText = 'Assertion passing ' + this.actual + ' equals ' + expected;
   var expectDisplay = document.createElement("p");
   expectDisplay.innerHTML = expectText;
   expectDisplay.classList.add("pass");
   testingDisplay.appendChild(expectDisplay);
   console.log('%c Assertion passing ' + this.actual + ' equals ' + expected, 'color: green;');
 } else {
   var expectFailText = 'FAIL: expected ' + expected + ', got: ' + this.actual;
   var expectFailDisplay = document.createElement("p");
   expectFailDisplay.innerHTML = expectFailText;
   expectFailDisplay.classList.add("fail");
   testingDisplay.appendChild(expectFailDisplay);
   console.log('%c FAIL: expected ' + expected + ', got: ' + this.actual, 'color: red;');
 }
};

function describe(desc, callback) {
  var  descText = 'Describe: ' + desc;
  var descDisplay = document.createElement("h2");
  descDisplay.innerHTML = descText;
  testingDisplay.appendChild(descDisplay);
  console.log('%c Describe: ' + desc, 'font-weight: bold;');
  callback();
}

function it(desc, callback) {
  var itText = 'it: ' + desc;
  var itDisplay = document.createElement("h3");
  itDisplay.innerHTML = itText;
  testingDisplay.appendChild(itDisplay);
  console.log('%c It: ' + desc, 'font-style: italic;');
  callback();
}
