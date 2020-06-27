(function(exports) {

    function Article(id, title, url) {
        this._id = id;
        this._title = title;
        this._url = url
    }

    Article.prototype.getId = function() {
        return this._id
    }
    
    Article.prototype.getTitle = function() {
        return this._title
    }

    Article.prototype.getUrl = function() {
        return this._url
    }

    exports.Article = Article
})