(function(exports){
    function NewsArticle(title, newsUrl) {
        this.title = title
        this.newsUrl = newsUrl
        this.summary = ""
        this.image = ""
        this.getArticleDetails()
    }
    NewsArticle.prototype.getArticleDetails = function (){
        var self = this
        var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=" 
                    + "https://api.aylien.com/api/v1/extract?url=" 
                    + self.newsUrl 
        fetch(url) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) { 
            self.summary = data.article
            self.image = data.image
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticle = NewsArticle
})(this)