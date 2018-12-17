function NewsController(newsList, newsListView, newsView) {
}

NewsController.prototype = {

    render: function(html) {
        document.getElementById('app').innerHTML = html
    }

};
