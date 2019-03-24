(function(exports) {
    function NewsArticleList() {
        this.articles = []
        this.getData()
    }
    NewsArticleList.prototype.getData = function() {
        var self = this
        // TO DO: make key secret
        var url = "http://content.guardianapis.com/search?from-date=2019-03-23&api-key=686720e5-a46f-4832-b6be-e456aa0e4805"
        fetch(url) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.response.results.forEach(function(newsItem) {
                console.log("result " + newsItem.webTitle)
                var newsArticle = new NewsArticle(newsItem.webTitle)
                self.articles.push(newsArticle)
                console.log("self.articles " + self.articles)
            })
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticleList = NewsArticleList
})(this)