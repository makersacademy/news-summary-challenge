function Expect(value){
  this.value = value
};

function expect(argument) {
  return (new Expect(argument));
};

Expect.prototype.toEqual = function(value2){
  if (typeof this.value === typeof value2) {
    return this._ultimateComparison(value2)
  } else {
    return testFailed("Values are not equal.")
  }
};

Expect.prototype.toInclude = function(value){
  var status;
  for (var i = 0; i < this.value.length; i++) {
      if (this.value[i] === value) {
      status = true
    }
  }
  if (status === true) {
    return testPass("Value is included.");
  } else {
    return testFailed("Value is not included.");
  }
};

Expect.prototype.toBeEmpty = function(){
  if (this.value.length === 0) {
    return testPass("Array is empty.");
  } else {
    return testFailed("Array is not empty.");
  }
};

Expect.prototype.throwsError = function(value){
  try {
    this.value();
  }
  catch(e) {
    if (e === value) {
      return testPass("Correct error thrown.");
    } else {
      return testFailed("Error not thrown.");
    }
  }
};

Expect.prototype._ultimateComparison = function(value2){
  if (value2 instanceof Function) {
    return this._comparison(value2)
  }
  else if (value2 instanceof Array) {
    return this._arrayComparison(value2)
  } else if (value2 instanceof Object ) {
    return this._hashComparison(value2)
  } else {
    return this._comparison(value2) }
}

Expect.prototype._comparison = function(value2){
  if (String(this.value) === String(value2)) {
    return testPass("Values are equal.");
  } else {
    return testFailed("Values are not equal.")
  }
};

Expect.prototype._arrayComparison = function(value){
  if (value.length != this.value.length ) {
    return testFailed("Values are not equal.")
  } for (var i = 0; i < this.value.length; i++) {
    if ( this.value[i] !== value[i]) {
      return testFailed("Values are not equal.")
    }
  }
  return testPass("Values are equal.")
}

Expect.prototype._hashComparison = function(value){
  var aProp = Object.getOwnPropertyNames(this.value);
  var bProp = Object.getOwnPropertyNames(value);

  if (aProp.length != bProp.length ) {
    return testFailed("Values are not equal.")
  } for (var i = 0; i < aProp.length; i++) {
    var propName = aProp[i];
    if ( this.value[propName] !== value[propName]) {
      return testFailed("Values are not equal.")
    }
  }
  return testPass("Values are equal.")
}
