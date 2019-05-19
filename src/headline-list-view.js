(function(exports) {
  function HeadlineListView(headlineList) {
    this.headlineList = headlineList;
  }

  HeadlineListView.prototype = {
    render: function() {
      var headlines = this.headlineList.all();
      return [
        headlines
          .map(function(headline) {
            return "<p>" + headline.headline + "</p>";
          })
          .join("")
      ].join("");
    }
  };

  exports.HeadlineListView = HeadlineListView;
})(this);
