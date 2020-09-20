class ArticleView {
    constructor(article) {
        this.article = article
    };

    showHtml() {
        return '<div>' + this.article.articleHeadline() + '<br>' + this.article.articleSummary() + '</div>';
    }
}