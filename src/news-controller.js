(function(exports) {
    function NewsController(articleListModel) {
        this.articleList = articleListModel;
        this.articleListView = new ArticleListView(this.articleList)
    }

    NewsController.prototype.insertHTMLToApp = function() {
        document.getElementById("app").innerHTML = this.articleListView.returnListViewHTML();
    };

    exports.NewsController = NewsController;

})(this);


let articleList = new ArticleList();
let newsController = new NewsController(articleList);
newsController.insertHTMLToApp();

$( document ).ready(function() {
    $("a").click(function(event) {
        alert(event.target.id);
    });
});



// window.addEventListener("hashchange", renderSingleNoteView()


