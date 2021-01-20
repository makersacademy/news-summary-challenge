class HeadlinesView {

    constructor(headlines) {
       this.headlines = headlines;
    }

    returnHtmlView() {
        var headlines = this.headlines.allHeadlines().map(function(article) { 
            return '<a href=' + article.articleUrl() + '>' + article.articleHeadline() + '</a>'
        });
            return "<div>" + headlines.join("</div><div>") + "</div>";
        }
    }