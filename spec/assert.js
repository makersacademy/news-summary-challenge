var assert = {
  isTrue: function (describe, assertionCheck) {
    if (!assertionCheck) {
      throw ('Assertion failed ' + assertionCheck + ' is not truthy')
    } else {
      console.log(describe)
    }
  },
  isEqual: function (describe, value1, value2) {
    if (value1 === value2) {
      console.log(describe)
    } else {
      throw ('assertion failed: ' + value1 + ' and ' + value2 + ' are not equal')
    }
  },
  isObjectType: function (describe, val1, val2) {
    if(val1.constructor === val2.constructor) {
      console.log(describe)
    } else {
      throw ('Assertion failed: ' + val1 + 'is not an object type as ' + val2)
    }
  }

}
