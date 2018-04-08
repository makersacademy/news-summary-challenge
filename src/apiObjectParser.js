(function(exports) {
  function apiObjectParser(object, key) {
    return object.response.results.map (function(result) { return result[key] });
  }
  exports.apiObjectParser = apiObjectParser;
})(this)
