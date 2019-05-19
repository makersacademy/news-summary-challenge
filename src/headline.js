(function(exports) {
  function Headline(headline) {
    this.headline = headline;
  }

  Headline.prototype = {
    display: function() {
      return "This is a fake headline";
    }
  };

  exports.Headline = Headline;
})(this);
