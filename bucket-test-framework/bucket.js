var passes = 0;
var fails = 0;
var testTotal = 0;



const describe = function(desc, func) {
  console.log(desc);
  try {
    func();
  } catch(e) {
    fails += 1;
    console.log("    fail:");
    console.log(e);
  }
};

const it = function(msg, fn) {
  describe('  ' + msg, fn);
};

const matchers = function(exp) {
    var matcherObj = {
             toBe: function(assertion) {
                    if (exp === assertion) {
                       console.log('    pass');
                      document.getElementById("results").innerHTML = 'pass';
                       passes += 1;
                       return true;
                    } else {
                      document.getElementById("results").append = 'Fail';
                       console.error('    ===================== FAIL');
                       fails += 1;
                       return false;
                   }
              },
              toNotBe: function(assertion) {
                    if (exp !== assertion) {
                       console.log('    pass');

                       passes += 1;
                       return true;
                    } else {
                       console.log('    ===================== FAIL');
                       fails += 1;
                       return false;
                   }
              },
              toThrow: function() {
                    try {
                      exp();

                    } catch(e) {
                      console.log('    pass');
                      passes += 1;
                      return true;
                    }
                    console.log('    ===================== FAIL');
                    fails += 1;
                    return false;
              },
              toBeLessThan: function(num) {
                  if (exp < num) {
                      console.log('    pass');
                      passes += 1;
                      return true;
                    }
                    console.log('    ===================== FAIL');
                    fails += 1;
                    return false;
              },
              toBeGreaterThan: function(num) {
                  if (exp > num) {
                      console.log('    pass');
                      passes += 1;
                      return true;
                    }
                    console.log('    ===================== FAIL');
                    fails += 1;
                    return false;
              },
              includes: function(thing) {
                  if (exp.includes(thing)) {
                      console.log('    pass');
                      passes += 1;
                      return true;
                    }
                    console.log('    ===================== FAIL');
                    fails += 1;
                    return false;
              }
         };

     return matcherObj;
};

const expect = function(exp) { return matchers(exp); };

const createDouble = function(methodNameArray, returnVal) {
  if (methodNameArray.length !== returnVal.length) {
     throw "ERROR: Arrays need to be of equal length";
  }
  var obj = {};
  methodNameArray.forEach((methodName, index)=> {
      obj[methodName] = () => { return returnVal[index];};
  });
  return obj;
};
