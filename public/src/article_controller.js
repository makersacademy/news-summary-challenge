(function(exports) {

    function ArticleController(newsArticleData) {
        this._indexNum = 0
        this._newsArticleData = newsArticleData
        this._listView = new ListView()
        this._allArticlesArray = []
    }

    ArticleController.prototype.createArticleObjects = function() {

        for (let i=0; i<this._newsArticleData.length; i++) {
            this._allArticlesArray.push( new Article(this._indexNum, this._newsArticleData[i].webTitle, this._newsArticleData[i].webUrl));
            this._indexNum++
        }
    }

    ArticleController.prototype.getArrayOfArticles = function() {
        return this._allArticlesArray
    }

    ArticleController.prototype.convertListToView = function() {
        console.log(this._allArticlesArray)
        return this._listView.createListView(this._allArticlesArray)
    }


    exports.ArticleController = ArticleController
})(this);
