class Assert {

  static assert(assertion, description) {
    if (assertion == false) {
      throw new Error("Assertion did not pass: " + description);
    } else {
      console.log("%c Test passed for: " + description , "color: green;");
    }
  }

}
