var assert = {
  isTrue: function(desc = "DESCRIPTION", assertionToCheck) {
    if (!assertionToCheck) {
      console.log("%c " + desc + ": Failed. " + assertionToCheck + " response to test",
                  'color: red');
    } else {
      console.log("%c " + desc + ": Test passed!", 'color: green');
    }
  }
};
