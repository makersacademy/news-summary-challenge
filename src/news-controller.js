(function(exports) {
    function NewsController(articleListModel) {
        this.articleList = articleListModel;
        this.articleListView = new ArticleListView(this.articleList)
    }

    NewsController.prototype.insertHTMLToApp = function() {
        document.getElementById("app").innerHTML = this.articleListView.returnListViewHTML();
    };

    NewsController.prototype.insertSingleViewHTMLToApp = function(id) {
        document.getElementById("app").innerHTML = this.articleListView.returnSingleViewHTML(id);
    };

    exports.NewsController = NewsController;

})(this);


let articleList = new ArticleList();
let newsController = new NewsController(articleList);
newsController.insertHTMLToApp();

$( document ).ready(function() {
    $(".articles").click(function(event) {
        newsController.insertSingleViewHTMLToApp(event.target.id);
        // alert(event.target.id);
    });
});



// window.addEventListener("hashchange", renderSingleNoteView()


