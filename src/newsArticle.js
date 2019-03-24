(function(exports){
    function NewsArticle(title, newsUrl) {
        DEFAULT_IMAGE = "https://pbs.twimg.com/profile_images/1061915596328263680/EcBjYl5z_400x400.jpg"
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
            self.image = (data.image != "") ? data.image : DEFAULT_IMAGE
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticle = NewsArticle
})(this)