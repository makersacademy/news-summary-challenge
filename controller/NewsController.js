(function(exports) {
    function NewsController(articleList) {
        this.articleList = articleList;
        this.articleListView = new ArticleListView(articleList);
        var self = this;

        window.addEventListener("hashchange", function(event) {
            event.preventDefault();
            this.console.log('click');
            var articleId = parseInt(window.location.hash.split("/")[1]);
            self.displayArticleSummary(articleId);   
            });
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

    NewsController.prototype.displayArticleSummary = function(articleId) {
        var self = this;
        console.log('display');
    };



    exports.NewsController = NewsController;
})(this);

// var al = new ArticleList();
// var nc = new NewsController(al);
// nc.populateListFromApiResponse();