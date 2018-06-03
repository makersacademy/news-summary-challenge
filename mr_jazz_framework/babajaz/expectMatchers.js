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
    return testFailed("FAILED")
  }
};




Expect.prototype.toInclude = function(value){
  var status;
  for (var i = 0; i < this.value.length; i++) {
    if (typeof this.value[i] === typeof value) {
      if (String(this.value[i]) === String(value))
      status = true;
    }
  }
  if (status === true) {
    return 'Yes, it is in the array.';
  } else {
    return 'No, it is not in the array.';
  }
};

Expect.prototype.toBeEmpty = function(){
  if (this.value.length === 0) {
    console.log('Yes, it is empty')
  } else {
    console.log('No, it is not empty')
  }
};

Expect.prototype.lengthToBe = function(value){
  if (this.value.length === value) {
    console.log('Yes, it is the correct length.')
  } else {
    console.log('No, it is the wrong length.')
  }
};

Expect.prototype.toReturn = function(value){
  if (this.value === value) {
    console.log('Yes, it returned the value')
  } else {
    console.log('No, it did not return the value')
  }
};

Expect.prototype.throwsError = function(value){
  try {
    this.value();
  }
  catch(e) {
    if (e === value) {
      console.log('This is the correct error')
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
    return testPass("PASSED")
  } else {
    return testFailed("FAILED")
  }
};

Expect.prototype._arrayComparison = function(value){
  if (value.length != this.value.length ) {
    return testFailed("FAILED")
  } for (var i = 0; i < this.value.length; i++) {
    if ( this.value[i] !== value[i]) {
      return testFailed("FAILED")
    }
  }
  return testPass("PASSED")
}

Expect.prototype._hashComparison = function(value){
  var aProp = Object.getOwnPropertyNames(this.value);
  var bProp = Object.getOwnPropertyNames(value);

  if (aProp.length != bProp.length ) {
    return testFailed("FAILED")
  } for (var i = 0; i < aProp.length; i++) {
    var propName = aProp[i];
    if ( this.value[propName] !== value[propName]) {
      return testFailed("FAILED")
    }
  }
  return testPass("PASSED")
}
