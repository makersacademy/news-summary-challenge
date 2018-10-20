function Blank(name, methods=null, variables=null) {
  this._name = name;
  this._count = {};

  if (methods) {
    let methodNames = Object.keys(methods)
    methodNames.forEach(name => {
      this._resetCount(name)
      this.stub(name, methods[name])
    });
  };

  if (variables) {
    variables.forEach(variable => {
      this[variable[0]] = null;
    })
  }
}

Blank.prototype._resetCount = function(method) {
  this._count[method] = 0;
}

Blank.prototype._resetAllCount = function() {
  for (let method in this._count) {
    this._resetCount(method)
  }
}

Blank.prototype.stub = function(method, output = null) {
  this[method] = () => {
    this._count[method] += 1;
    return output
  }
}

module.exports = Blank
