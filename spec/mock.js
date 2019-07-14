var mock = {
  makeDouble: function(name) {
    var double = new this.Double(name);
    return double;
  },
  addMethod: function(double, methodNameToAdd, functionToAdd) {
    proto = Object.getPrototypeOf(double);
    proto[methodNameToAdd] = functionToAdd;
  },
  Double: function Double(name) {
    this.name = name;
  }
}