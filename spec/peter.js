var assert = {
  isTrue: function(assertionToCheck, text) {
    if (!assertionToCheck) {
      throw new Error("Nah, mate. Sorry, it's " + assertionToCheck + ". \n Test not working. \n \n" + text);
    }
    else {
      console.log('YEAH BABY IT WORKS!!', text)
    }
  }
};
