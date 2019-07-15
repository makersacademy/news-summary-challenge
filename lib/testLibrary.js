function describe(testcase, callback) {
  console.log(testcase);  
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`\t %c ✓ ${description}`, 'color: #30e849; font-weight: bold'); 
  } catch(e) {
    console.log(`\t %c X %c${description} %c \n(${e.message})`, 'color: #c7166f; font-weight: bold', '', 'color: #c7166f; font-weight: bold');
  }
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual != expected) {
        throw new Error(`Expected:\n ${actual} \nTo Equal:\n ${expected}`);
      } else {
        return true;
      }
    }, 
    toBe: function (expected) {
      if (actual !== expected) {
        throw new Error(`Expected:\n ${actual} \nTo Equal:\n ${expected}`);
      } else {
        return true;
      }
    },
    toInclude: function (element){
      if (!actual.includes(element)) {
        throw new Error(`Expected:\n ${actual} \nTo Include:\n ${element}`);
      } else {
        return true;
      }
    }
  }
};

