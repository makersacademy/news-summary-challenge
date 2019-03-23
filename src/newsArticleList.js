'use strict';
(function(exports) {
    function NewsArticleList() {
        this.articles = []
        console.log("articles " + this.articles)
        this.getData()
    }
    NewsArticleList.prototype.getData = function() {
        // TO DO: make key secret
        var url = "http://content.guardianapis.com/search?from-date=2019-03-23&api-key=686720e5-a46f-4832-b6be-e456aa0e4805"
        fetch(url) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.response.results[0].webTitle)
            //TO DO: create newsArticle instances from results and put in articles array
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticleList = NewsArticleList
})(this)