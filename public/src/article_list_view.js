(function(exports) {
    function ListView() {
    }

    ListView.prototype.createListView = function(arrayOfArticles) {
        var viewArray = []
        arrayOfArticles.forEach( (article) => {
            viewArray.push(`<div class='card-panel'><div>${article.getTitle()}</div><br><form action='${article.getUrl()}'><input type=submit value='Go to Article'></form></div>`)
        })
        return viewArray.join("")
    }

    exports.ListView = ListView
})(this);