(function(exports) {

  exports.describe = function(string, callback) {

    output.startDescribe(string);
    callback();
    output.endDescribe();

  };

})(this);
