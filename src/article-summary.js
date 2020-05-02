(function(exports) {
  function ArticleSummary() {}

  ArticleSummary.prototype.getSummary = function() {
    var that = this;
    var request = new XMLHttpRequest();

    request.open(
      "GET",
      "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://www.theguardian.com/politics/live/2020/mar/30/uk-coronavirus-live-rate-infection-lockdown-covid-19",
      true
    );

    request.onload = function() {
      data = JSON.parse(this.response);

      if (request.status >= 200 && request.status < 300) {
        var articles = data.response.results;
        console.log(data);

        that.insert();
      } else {
        throw new Error("Request failed");
      }
    };
    request.send();
  };

  exports.ArticleSummary = ArticleSummary;
})(this);
