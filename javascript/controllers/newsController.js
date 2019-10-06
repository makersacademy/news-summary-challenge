(function(exports){

    function NewsController() {

    };

    NewsController.prototype.displayIndexPage = async function() {
        const newsItemsModel = new NewsItemsModel();
        const newsItems = await newsItemsModel.get();

        const indexView = new IndexView(newsItems);
        this._updatePageHtml(indexView.render());
    };

    NewsController.prototype._updatePageHtml = function(html) {
        document.getElementById('root').innerHTML = html;
    };

    exports.NewsController = NewsController;

})(this);