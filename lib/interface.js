$(document).ready(function() {

    console.log("HELLO");
    var newsFeed = new NewsFeed(document.querySelector("#feed"));
    $("#feed").text(newsFeed._renderAll());

    function NewsFeed(appElement) {
      this._appElement = appElement;
      this.feed = [];
    }
  
    NewsFeed.prototype = {

      getFeed: function() {
        const feedData = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=tapes%20AND%20president&tag=politics/politics&from-date=2016-01-01?show-fields=body");

        // execute function inside then() once all the data has finished downloading
        feedData .then(data => data.json());

        var result = feedData.reduce((accumulator, item) => { return [...accumulator, ...item.webTitle];}, 0)     
        this.feed.push(result);
        },

        fullFeed: function() {
          return this.feed;
        },
  
      _renderHTML: function(html) {
        this._appElement.innerHTML = html;
      },
  
      _renderNewsItem: function() {
        return [
          "<span class='newsItem'>",
            fullFeed(),
          "</span>",
        ].join("");
      },
  
      _renderAll: function() {
        return this._renderHTML(this._renderNewsItem())
      }
    }
});
