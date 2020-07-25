(function(exports) {

    function ArticleSummaryView(article) {
        this._article = article
    }

    ArticleSummaryView.prototype.singleArticleView = function() {
        return `<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">${this._article.getTitle()}</h1><p class="lead">${this._article.getSummary()}</p></div></div></div><div class="article-body">${this._article.getBody()}</div><form action='${this._article.getUrl()}' class='go-to-article-site'><input type=submit value='Go to Article' class='btn btn-light'></form><form action='#0' class='go-back-form'><input type=submit value='Go back' class='btn btn-light'></form></div>`
    }


    exports.ArticleSummaryView = ArticleSummaryView
})(this)