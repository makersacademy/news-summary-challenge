(function(exports){
  var assert = {
    toBeInstanceOf: function(type) {
      if (this instanceof type){
        return true;
      } else {
        var e = new Error("<i>" + this.constructor.name + " is not an instance of " + type.name + "</i><br>");
        throw (e.stack);
      }
    },

    toInclude: function(element) {
      if(this.includes(element)){
        return true;
      } else {
        var e = new Error("<i>" + this.constructor.name + " is not included in " + element.name + "</i><br>");
        throw (e.stack);
      }
    },

    toEqual: function(element) {
      if(this.valueOf() === element){
        return true;
      } else {
        var e = new Error("<i> [ " + this.valueOf() + " ] is not equal to [ " + element.valueOf() + " ]</i><br>");
        throw (e.stack);
      }
    }
  };
  exports.assert = assert;
})(this);
