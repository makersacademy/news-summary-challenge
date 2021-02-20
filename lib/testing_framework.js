function it(description, assertion) {
  console.log("Test name: " + description);
  assertion();
}

function describe(thingBeingDescribed, assertion) {
  console.log(thingBeingDescribed);
  assertion();
}

function isEqual(a, b) {
  if (a === b) {
    console.log("PASS");
  } else {
    console.log("FAIL " + a + " != " + b);
    console.log(a);
    console.log(b);
  }
}

function isTrue(a) {
  if (a === true) {
    console.log("PASS");
  } else {
    console.log(`FAIL` + a + `is false`);
  }
}
