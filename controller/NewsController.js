(function(exports) {
    function NewsController(articleList) {
        this.articleList = articleList;
        this.articleListView = new ArticleListView(articleList);
    }

    NewsController.prototype.getArticleList = function() {
        return this.articleList;
    };

    NewsController.prototype.populateListFromApiResponse = function() {
        var self = this;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {  
                var data = JSON.parse(this.responseText);
                console.log(data);
                for (i=0; i<data.response.results.length; i++) {
                    var title = data.response.results[i].webTitle;
                    var url = data.response.results[i].webUrl;
                    self.articleList.addArticle(title, url);
                }
                console.log(self.articleList);
                self.displayHeadlines();
            }
        };
        xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=from-date=" + "2019-05-10", true);
        xhttp.send();
    };

    NewsController.prototype.displayHeadlines = function() {
        document.getElementById("headline-list").innerHTML = this.articleListView.outputHtmlString();
    }; 

    exports.NewsController = NewsController;
})(this);

var al = new ArticleList();
var nc = new NewsController(al);
nc.populateListFromApiResponse();