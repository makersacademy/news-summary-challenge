function Assert() {
  function isTrue(assertion) {
    if (!assertion) {
      throw new Error("Expected: " + assertion + " to be true");
    }
  }

  function isFalse(assertion) {
    if (assertion) {
      throw new Error("Expected: " + assertion + " to be false");
    }
  }

  function isEqual(assertion, secondAssertion) {
    if (assertion !== secondAssertion) {
      throw new Error("Expected: " + assertion + "to equal" + secondAssertion);
    }
  }

  return {
   isTrue: isTrue,
   isFalse: isFalse,
   isEqual: isEqual,
 };
}
