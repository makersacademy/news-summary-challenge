var assert = {
    isTrue: function (assertionToCheck) {
      if (!assertionToCheck) {
        console.log(`\t %c X ${assertionToCheck}`, 'color: #e8308c; font-weight: bold');
        throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`)
      }
      else {
        console.log(`\t %c ✓ ${assertionToCheck}`, 'color: #30e8bd; font-weight: bold');
      }
    },
    isFalse: function (assertionToCheck) {
      if (assertionToCheck) {
        throw new Error(`Assertion failed: ${assertionToCheck} is falsy`)
      }
    }
  };