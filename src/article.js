(function(exports) {

    class Article {
        constructor(headline, articleID, date, link, image) {
            this.headline = headline;
            this.articleID = articleID;
            this.date = date; 
            this.link = link;
            this.image = image;
        }
    }

    Article.prototype.getHeadline = function() {
        return this.headline    
    }

    Article.prototype.getDate = function() {
        return this.date
    }

    Article.prototype.getLink = function() {
        return this.link 
    }

    exports.Article = Article;
})(this);



