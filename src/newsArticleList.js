'use strict';
(function(exports) {
    function NewsArticleList() {
        this.articles = this.getData()
    }
    NewsArticleList.prototype.getData = function() {
        // api call to get articles
        var url = "http://content.guardianapis.com/search?from-date=2019-03-23&api-key=686720e5-a46f-4832-b6be-e456aa0e4805"
        fetch(url) 
        .then(function(response) {
            newsData = response.json();
            console.log("1 " + response.response.results[0].webTitle)
            console.log("2 " + response.results[0].webTitle)
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticleList = NewsArticleList
})(this)