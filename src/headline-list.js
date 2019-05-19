(function(exports) {
  function HeadlineList() {
    this.headlineList = [];
    this.movieList = [];
  }

  HeadlineList.prototype = {
    add: function(headline) {
      this.headlineList.push(new Headline(headline));
    },
    //
    // getHeadlines: function() {
    //   self = this.movieList;

    all: function() {
      return this.headlineList;
    },

    allMovies: function() {
      return this.movieList;
    }
  };

  exports.HeadlineList = HeadlineList;
})(this);
