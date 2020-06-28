(function(exports) {

    function Article(id, title, url, thumbnail, body, summary) {
        this._id = id;
        this._title = title;
        this._url = url;
        this._thumbnail = thumbnail;
        this._body = this.cutArticle(body);
        this._summary = summary
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

    Article.prototype.getThumbnail = function() {
        return this._thumbnail
    }

    Article.prototype.getBody = function() {
        return this._body
    }

    Article.prototype.getSummary = function() {
        return this._summary
    }

    Article.prototype.cutArticle = function(body) {
        summary = []
        array = body.split("<p>")
        for (i=0; i< 8; i++) {
            summary.push(array[i])
        }
        return summary.join("")
    }

    exports.Article = Article
})(this)