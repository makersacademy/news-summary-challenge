(function(exports) {
  function oneShotStub(object, func) {
    oldFunc = object[func];
    return {
      andReturnValue: function(returnVal) {
        object[func] = function(){
          object[func] = oldFunc;
          return returnVal;
        };
      },
      andReturnArgs: function() {
        object[func] = function(args){
          object[func] = oldFunc;
          return args;
        };
      }
    }
  };
  exports.oneShotStub = oneShotStub;
})(this)
