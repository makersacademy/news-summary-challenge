(function(exports) {

    function ArticleSummaryView(article) {
        this._article = article
    }

    ArticleSummaryView.prototype.singleArticleView = function() {
        return `<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">${this._article.getTitle()}</h1><p class="lead">${this._article.getSummary()}</p></div></div></div><div class="article-body">${this._article.getBody()}</div><form action='${this._article.getUrl()}' class='go-to-article-site'><input type=submit value='Go to Article' class='btn btn-light'></form><div id="go-back-div"><button onclick="location.href='#0'" type="button" id="go-back-button" class='btn btn-light'>Go back</button></div></div>`
    }


    exports.ArticleSummaryView = ArticleSummaryView
})(this)