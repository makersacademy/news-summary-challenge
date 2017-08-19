function it(testTitle, func) {
  var stringOutput = "<b>" + testTitle + "</b><br>";
  try{
    stringOutput += func();
    output(stringOutput);
  }
  catch(err){
    stringOutput += "<i>" + err + "</i><br>" + err.stack;
    output(stringOutput);
  }
}

function expect(something){
  return something;
}

function output(outputText){
  document.getElementById("errorMsg").innerHTML += outputText + "<br><br>";
}

Object.prototype.toBeInstanceOf = function(type){
  try {
    if (this instanceof type){
      return true;
    } else {
      var e = new Error("<i>" + this.constructor.name + " is not an instance of " + type.name + "</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};

Object.prototype.toInclude = function(element){
  try {
    if(this.includes(element)){
      return true;
    } else {
      var e = new Error("<i>" + this.constructor.name + " is not included in " + element.name + "</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};

Object.prototype.toEqual = function(element){
  try {
    if(this.valueOf() === element){
      return true;
    } else {
      var e = new Error("<i> [ " + this.valueOf() + " ] is not equal to [ " + element.valueOf() + " ]</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};
