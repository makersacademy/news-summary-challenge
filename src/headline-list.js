(function(exports) {
  function HeadlineList() {
    this.headlineList = [];
  }

  HeadlineList.prototype = {
    add: function(headline) {
      this.headlineList.push(new Headline(headline));
    },

    all: function() {
      return this.headlineList;
    }
  };

  exports.HeadlineList = HeadlineList;
})(this);
