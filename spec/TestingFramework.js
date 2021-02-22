function testName(string) {
  console.log(`Test: ${string}`);
}

function testEqual(callback, expected) {
  let actual = callback;
  if (actual === expected) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected to get ${expected}, but got ${actual}`);
  }
}

function testNotEqual(callback, notExpected) {
  let actual = callback;
  if (actual != notExpected) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected not to get ${notExpected}, but got ${actual}`);
  }
}

function testStringOrArrayContains(array, item) {
  if (array.includes(item)) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log(`Expected ${array} to include ${item} but it didn't`);
  }
}

function testRaisesError(callback) {
  let thereWasAnError;
  try {
    callback();
  } catch (error) {
    thereWasAnError = true
    console.log(error)
  }
  if (thereWasAnError) {
    console.log("Pass");
  } else {
    console.log("Fail");
    console.log("Expected to raise an error but nothing was raised");
  }
}


