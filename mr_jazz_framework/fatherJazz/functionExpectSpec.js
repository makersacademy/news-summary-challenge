//  Trusted function to test if Expect function exists.

function isTrue (argument){
  if (argument) {
    return true
  } else {
    return false
  }
};

var test = new Expect();

console.log("If expect exists should be true")
console.log(isTrue(test));

//  Testing that this.value exists

var testArg = new Expect(true);

console.log("If this.value exists should be true")
console.log(isTrue(testArg.value));

// Testing this.value does not exist

console.log("This.value does not exist so should be false")
console.log(isTrue(test.value));

// Testing that expect function returns a function

function isFunction (expect){
  if ( expect instanceof Function) {
    return true
  } else {
    return false
  }
}

console.log("Returns true if expect returns a function");
console.log(isFunction(expect));

// Testing that expect argument is passed to a new instance of Expect

console.log("Returns false if no argument is passed")
console.log(isTrue(expect().value))

// Testing that expect argument is equal to argument passed into new instance of Expect

function arguments () {
  if (expect(true).value === new Expect(true).value) {
    return true
  } else {
    return false
  }
}

console.log("Returns true if expect.value has the same value as a new Expect.value value")
console.log(arguments())


// Testing that expect function returns an instance of Expect

function isInstance (expect){
  if ( expect() instanceof Expect) {
    return true
  } else {
    return false
  }
}

console.log("Returns true if expect returns an instance of Expect");
console.log(isInstance(expect));
