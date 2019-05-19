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
            // console.log(headline);
            // return headline with a link to the summary
            return (
              `<p><a href=${headline.headline.webUrl}>` +
              headline.headline.webTitle +
              "</a></p><br>"
            );
          })
          .join("")
      ].join("");
    }
    // summarize: function(news) {
    //   var sum = http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${
    //     headline.headline.webUrl
    //   document.getElementById("body").innerHTML =
    // }
  };

  exports.HeadlineListView = HeadlineListView;
})(this);
