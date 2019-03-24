(function(exports) {
    function NewsArticleList() {
        this.articles = []
        this.getData()
        this.id = 0
    }
    NewsArticleList.prototype.getData = function() {
        var self = this
        var url = "http://content.guardianapis.com/search?from-date=2019-03-23&api-key=" +
                    GUARDIAN_API_KEY
        fetch(url) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.response.results.forEach(function(newsItem) {
                var newsArticle = new NewsArticle(newsItem.webTitle, newsItem.webUrl)
                newsArticle.id = self.id
                self.id += 1
                setTimeout(function() {
                    self.articles.push(newsArticle)
                }, 1000)
            })
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticleList = NewsArticleList
})(this)