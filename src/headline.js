(function(exports) {
  function Headline(headline) {
    this.headline = headline;
    this.summary = [];
  }

  Headline.prototype = {
    generate: function() {
      return "This is a fake headline";
    },

    getText: function() {
      return this.headline;
    },

    addSummary: function(sentence) {
      this.summary = sentences;
    }
  };

  exports.Headline = Headline;
})(this);
