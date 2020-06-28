(function(exports) {
    function ListView() {
    }

    ListView.prototype.createListView = function(arrayOfArticles) {
        var i = 0
        var viewArray = [`<div class="container"><div class="row">`]
        for (let i = 0; i < arrayOfArticles.length && i < 9; i++) {
            if (i % 3 === 0) {
                viewArray.push(`</div><div class="row">`)
            }
            viewArray.push(`<div class="col-sm"><div class="headline">${arrayOfArticles[i].getTitle()}</div><div><img src='${arrayOfArticles[i].getThumbnail()}' class='pic'></div><form action='#${arrayOfArticles[i].getId()}' class="see-more-form"><input type=submit value='See more' id='see-more-button' class='btn btn-light'></form></div>`)

        }
        viewArray.push("</div>")
        return viewArray.join("")
    }

    exports.ListView = ListView
})(this);