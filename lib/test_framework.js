function Expect(data){
  this.data = data;
}

Expect.prototype._assert = function(expression, failMsg){
  return expression ? "Passed" : failMsg
}

Expect.prototype.toEqual = function(val){
  var failMsg = "Failed. Expected " + this.data + " to equal " + val
  return this._assert(this.data === val, failMsg);
}

Expect.prototype.toBeTrue = function(){
  var failMsg = "Failed. Expected " + this.data + " to be true"
  return this._assert(this.data == true, failMsg);
}

Expect.prototype.toBeFalse = function(){
  var failMsg = "Failed. Expected " + this.data + " to be false"
  return this._assert(this.data == false, failMsg);
}


class TestVisualizer{
  constructor(){
  }


  displayResult(name, prop, result){
    window.addEventListener('load', () => {
      if(document.getElementById(name) === null){ this.createULAndHeading(name) }
      document
        .getElementById(name)
        .innerHTML += "<li>" + prop + "():   " + result + "</li>"
    })
  }

  createULAndHeading(name){
    var headingElem = document.createElement('h3')
    headingElem.appendChild(document.createTextNode(name))
    var ulElem = document.createElement('ul');
    ulElem.setAttribute("id",name);
    document.body.appendChild(headingElem);
    document.body.appendChild(ulElem);
  }
}

// Automatically runs methods that begin with 'test' on instantiation
class UnitTest{
  constructor(testVisualizer = new TestVisualizer){
    var self = this;
    this._name = this.__proto__.constructor.name;
    this.testVisualizer = testVisualizer
    self.runTests();
  }

  runTests(){
    var properties = Object.getOwnPropertyNames(this.__proto__);
    properties.forEach(function(prop){
      if(prop.slice(0,4) === "test"){
        this.testVisualizer.displayResult(this._name, prop, this[prop]());
      }
    }, this)
  }
}
