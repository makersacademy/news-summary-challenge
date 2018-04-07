(function(exports) {
  this.expect = function(argument1) {
    return {
      toEqual: function(argument2) {
        return argument1 === argument2;
      },
      toBeNull: function() {
        return argument1 == null;
      },
      toBeEmpty: function() {
        return (argument1 instanceof Array) && (argument1[0] == null);
      },
      toNotToBeEmpty: function() {
        return (argument1 instanceof Array) && (argument1[0] !== null);
      },
      toBe: function(Class) {
        return (argument1 instanceof Class);
      }
    };
  };
})(this);
