(function(exports) {

    function SingleArticleView(article) {
        this.article = article
    };

    SingleArticleView.prototype.returnSingleArticle = function() {
        return "<div>" + this.article.getContent() + "</div>"
    }

    exports.SingleArticleView = SingleArticleView;
})(this);