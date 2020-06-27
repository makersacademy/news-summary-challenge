(function(exports) {
    function ListView(arrayOfArticles) {
        this._articles = arrayOfArticles
    }

    ListView.prototype.createListView = function() {
        var viewArray = []
        this._articles.forEach( (article) => {
            viewArray.push(`<div class='card-panel'><div>${article.getTitle()}</div><br><form action='${article.getUrl()}'><input type=submit value='Go to Article'></form></div>`)
        })
        return viewArray.join("")
    }

    exports.ListView = ListView
})(this)