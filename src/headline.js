(function(exports) {
  function Headline(headline) {
    this.headline = headline;
  }

  Headline.prototype = {
    // get: function() {
    // gets the headlines from the API
    // },
    // and then returns them
    generate: function() {
      return "This is a fake headline";
    }
  };

  exports.Headline = Headline;
})(this);
