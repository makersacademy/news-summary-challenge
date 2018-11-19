var assert = {
  _counter: 0,
  _toBeTested: "toBeTested",

  addToBeTested: function(toBeTested){
    this._counter += 1;
    this._toBeTested = toBeTested;
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      var text = "Assertion failes: " + assertionToCheck + " is  not true.";
      this._addToHTML(text, "failed");
    } else {
      var text = "Assertion passed: " + assertionToCheck + " is true.";
      this._addToHTML(text,"passed");
    }
  },

  toEqual: function(operand2) {
    var operand1 = this._toBeTested;
    if (operand1 !== operand2) {
      var text = "Assertion failed: " + operand1 + " is not equal to " + operand2;
      this._addToHTML(text, "failed");
    } else {
      var text = "Assertion passed: " + operand1 + " is equal to " + operand2;
      this._addToHTML(text, "passed");
    }
  },

  toContain: function(something) {
    var toBeTested = this._toBeTested
    if (!toBeTested.includes(something)) {
      var text = "Assertion failed: " + toBeTested + " is not includes to " + something;
      this._addToHTML(text, "failed");
    } else {
      this._addToHTML("Passed equal test", "passed");
    }
  },

  _createLI: function() {
    var para = document.createElement("LI");
    para.setAttribute("id", this._counter);
    document.getElementById("test").appendChild(para);
  },

  _addToHTML: function(text, state){
    this._createLI();
    document.getElementById(this._counter).innerHTML = text;
    if(state == "passed"){
      document.getElementById(this._counter).setAttribute("style", "color: green;")
    }else {
      document.getElementById(this._counter).setAttribute("style", "color: red;")
    }
  }
}

function expect(toBeTested) {
  assert.addToBeTested(toBeTested);
  return assert;
}

var page = window.document.body.innerHTML;


// Usage:
// expect("note").toEqual("note")
// expect(page).toContain("note")