function NewsListView(newsList) {
    this.newsList = newsList;
}

NewsListView.prototype = {
    render: function() {
        return this.newsList.news.map(function(news) {
            return "<div class='container'>" +
                        "<img src='" + news.thumbnail + "'>" +
                        "<div class='title'><a href='" + news.webUrl + "'>" + news.headline + "</a></div>" +
                        "<p>" + news.body.substring(0, 600) + "</p>" +
                    "</div>"
        }).join("")
    }
};