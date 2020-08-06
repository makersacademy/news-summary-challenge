(function(exports) {
    function ListView() {
    }

    ListView.prototype.createListView = function(arrayOfArticles) {
        var viewArray = [`<div class="container"><div class="row">`]
        for (let i = 0; i < arrayOfArticles.length && i < 9; i++) {
            if (i % 3 === 0) {
                viewArray.push(`</div><div class="row">`)
            }
            viewArray.push(`<div class="col-sm"><a href='#${arrayOfArticles[i].getId()}'><div class="headline">${arrayOfArticles[i].getTitle()}</div><div><img src='${arrayOfArticles[i].getThumbnail()}' class='pic'></div></a></div>`)
        }
        viewArray.push("</div>")
        return viewArray.join("")
    }

    exports.ListView = ListView
})(this);