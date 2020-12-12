const testBody = document.getElementById("tests");
let results = [];

(function (exports) {
  const makeTitle = (title) => {
    testBody.innerHTML += `<h2 class="mt-5 text-primary">${title}</h2>`;
  };

  const makeSubTitle = (subtitle) => {
    testBody.innerHTML += `<h5 class="text-secondary">${subtitle}</h5>`;
  };

  const addResult = (boolean) => {
    if (boolean) {
      results.push(true);
      testBody.innerHTML += '<p class="text-success">PASS</p>';
    } else {
      results.push(false);
      testBody.innerHTML += '<p class="text-danger">FAIL</p>';
    }
  };

  const it = (description, assertion) => {
    makeSubTitle(description);
    try {
      assertion();
    } catch (err) {
      addResult(false);
      console.error(err);
    }
  };

  const describe = (thingBeingDescribed, assertion) => {
    makeTitle(thingBeingDescribed);
    assertion();
  };

  const isEqual = (a, b) => {
    if (a === b) {
      addResult(true);
      return true;
    } else {
      addResult(false);
      return false;
    }
  };

  const isSameType = (a, b) => {
    addResult(typeof a === typeof b);
    return typeof a === typeof b;
  };

  const throwsError = (assertion) => {
    try {
      assertion();
    } catch (err) {
      addResult(true);
      console.log(err);
      return true;
    }
    addResult(false);
  };

  exports.it = it;
  exports.describe = describe;
  exports.isEqual = isEqual;
  exports.isSameType = isSameType;
  exports.throwsError = throwsError;
  
})(this);
