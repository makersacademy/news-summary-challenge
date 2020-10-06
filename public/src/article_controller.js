(function(exports) {

    function ArticleController(newsArticleData, listView = new ListView()) {
        this._indexNum = 1
        this._newsArticleData = newsArticleData
        this._listView = listView
        this._allArticlesArray = []
    }

    ArticleController.prototype.createArticleObjects = function() {

        for (let i=0; i<this._newsArticleData.length; i++) {
            this._allArticlesArray.push( new Article(this._indexNum, 
                this._newsArticleData[i].webTitle, 
                this._newsArticleData[i].webUrl, 
                this._newsArticleData[i].fields.thumbnail, 
                this._newsArticleData[i].fields.body, 
                this._newsArticleData[i].fields.trailText));
            this._indexNum++
        }
    }

    ArticleController.prototype.getArrayOfArticles = function() {
        return this._allArticlesArray
    }

    ArticleController.prototype.convertListToView = function() {
        return this._listView.createListView(this._allArticlesArray)
    }


    exports.ArticleController = ArticleController
})(this);
