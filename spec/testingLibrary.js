class Testing {
  constructor() {
  this.tests = [];
  }

  isEqual (a, b) {
      if (a === b) {
          return "Passed";
      } else {
          return "Failed";
      }
  };

  isNotEqual (a, b) {
    if (a !== b) {
        return "Passed";
    } else {
        return "Failed";
    }
  };

  arrayContains(a,b) {
    if(a.includes(b,0)){
      return "Passed";
    }
    else {
      return "Failed";
    }
  }

  isInstance (a, b) {
    if (a instanceof b) {
        return "Passed";
    } else {
        return "Failed";
    }
  };

  runTest (describe, test) {
    let htmlReturn = describe + '<br>' + test + '<p>'
    return htmlReturn
  };

  saveTest(describe, test){
    let testInstance = this.runTest(describe, test);
    this.tests.push(testInstance);
  };

  printTests () {
    return this.tests.toString().replaceAll(',','');
  };
};
