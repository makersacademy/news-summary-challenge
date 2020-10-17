class Test {

  static assert(assertion, description) {
    if (assertion == false) {
      throw new Error("Assertion did not pass: " + description);
    } else {
      console.log("Test passed: " + description);
    }
  }

}
