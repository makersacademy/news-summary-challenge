(function(exports){
  function HeadlinesView(guardianApi) {
    this._api = guardianApi;
    this._headlines = this._api.getHeadlines();
  };

  HeadlinesView.prototype = {
    html: function() {
      var list = this._headlines.response;
      var result = "<ul>";
      for (var i = 0; i < list.results.length; i++) {
        var img = list.results[i].fields.thumbnail;
        var title = list.results[i].fields.headline;
        var id = i
        result += `<li><a href="#article/${id}"><img src="${img}"></img><br>${title}</a></li>`;
      }
      return result + "</ul>";
    }
  };

  exports.HeadlinesView = HeadlinesView;

})(this);
