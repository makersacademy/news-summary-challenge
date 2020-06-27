(function(exports) {

    function ArticleSummaryView(article) {
        this._article = article
    }

    ArticleSummaryView.prototype.singleArticleView = function() {
        return `<div class='card-panel'><div>${this._article.getTitle()}</div><div><img src='${this._article.getThumbnail()}'></div><div>${this._article.getBody()}</div><form action='#0'><input type=submit value='Go back'></form></div>`
    }


    exports.ArticleSummaryView = ArticleSummaryView
})(this)