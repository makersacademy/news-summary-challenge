var assert = {
  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw Error(`Fail: ${name}. Expected true but received ${assertionToCheck}.`);
    }
    console.log(`Pass: ${name}.`)
  },
  isA: function(object, type) {
    if (!(object instanceof type)) {
      throw Error(`Fail: Expected type to be ${type.name} but received ${object.constructor.name}`)
    }
    console.log(`Pass: Object is of ${type.name} type`)
  }
};
