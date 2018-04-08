(function(exports) {
  function oneShotStub(object, method) {
    return {
      andReturn: function(returnVal) {
        oldFunc = object[method];
        object[method] = function(){
          object[method] = oldFunc;
          return returnVal
        };
      }
    }
  };
  exports.oneShotStub = oneShotStub;
})(this)
